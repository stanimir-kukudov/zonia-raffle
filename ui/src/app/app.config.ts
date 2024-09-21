import { DatePipe } from '@angular/common';
import { withFetch } from '@angular/common/http';
import { withInterceptorsFromDi } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { withInMemoryScrolling } from '@angular/router';
import { withRouterConfig } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { routes } from './app.routes';
import { AppService } from '@services/app.service';
import { StoreService } from '@services/store.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
      }),
    ),

    importProvidersFrom(BrowserModule, AngularSvgIconModule.forRoot()),
    StoreService,
    AppService,
    DatePipe,
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideAnimations(),
    provideClientHydration(),
  ],
};
