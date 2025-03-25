import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideHttpClient } from '@angular/common/http';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCJOdjO5p2u0nHON-0fRZV87auf74pCBGg',
  authDomain: 'fir-kanbanfire.firebaseapp.com',
  projectId: 'fir-kanbanfire',
  storageBucket: 'fir-kanbanfire.firebasestorage.app',
  messagingSenderId: '583827098104',
  appId: '1:583827098104:web:8ec52b11cf824d740cae0d',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
};
