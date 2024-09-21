import { isPlatformServer } from '@angular/common';
import { Inject } from '@angular/core';
import { signal } from '@angular/core';
import { Injectable } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()
export class StoreService {
  public isServer = signal(isPlatformServer(this.platformId));
  public isLoading = signal(true);
  public pageTitle = signal(environment.appName);
  public isTimerDone = signal(false);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  public setPageTitle(title: string): void {
    const pageTitle = title;
    this.pageTitle.set(pageTitle);
  }

  public setTimerDone(): void {
    this.isTimerDone.set(true);
  }
}
