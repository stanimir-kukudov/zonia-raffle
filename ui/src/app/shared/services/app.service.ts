import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { AxiosError } from 'axios';
import { AxiosInstance } from 'axios';
import { CreateAxiosDefaults } from 'axios';
import { ToastManager } from '@blocks/toast/toast.manager';
import { environment } from '@env/environment';
import { StoreService } from './store.service';
import { AxiosResponse } from 'axios/index';

type ResponseObject<T> = {
  success: boolean;
  message: string;
  responseObject: T;
  statusCode: number;
};

type Response<T> = AxiosResponse<ResponseObject<T>>;

@Injectable()
export class AppService {
  private default: CreateAxiosDefaults = {
    withCredentials: true,
    timeout: 990000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  private api: AxiosInstance = axios.create({
    baseURL: environment.apiBaseUrl,
    ...this.default,
  });

  private controller: AbortController = new AbortController();

  constructor(
    private storeService: StoreService,
    private toastManager: ToastManager,
    private router: Router,
  ) {
    this.initRequestInterceptor(this.api);
    this.initResponseInterceptor(this.api);

    this.initAuthHeader();
  }

  public async timeLeft(): Promise<Response<{ timeLeft: number }>> {
    return this.api.get('/timer/time-left');
  }

  public async createWinner(): Promise<Response<{ firstName: string; lastName: string }>> {
    return this.api.post('/users/winner');
  }

  private initAuthHeader(): void {}

  public initRequestInterceptor(instance: AxiosInstance): void {
    instance.interceptors.request.use(
      (config) => {
        this.storeService.isLoading.set(true);

        return config;
      },
      (error) => {
        console.log('interceptors.request.error', error);
        this.storeService.isLoading.set(false);

        this.toastManager.quickShow(error);
        return Promise.reject(error);
      },
    );
  }

  public initResponseInterceptor(instance: AxiosInstance): void {
    instance.interceptors.response.use(
      (response) => {
        this.storeService.isLoading.set(false);

        return response;
      },
      async (error: AxiosError) => {
        console.log('interceptors.response.error', error);
        this.storeService.isLoading.set(false);

        if (error.code === 'ERR_CANCELED') return Promise.resolve(error);

        this.toastManager.quickShow(error.message);
        return Promise.reject(error);
      },
    );
  }
}
