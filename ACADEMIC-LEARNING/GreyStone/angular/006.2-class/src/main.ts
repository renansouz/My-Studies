// import { bootstrapApplication } from '@angular/platform-browser';
// import { provideRouter } from '@angular/router';
// import { AppComponent } from './app/app.component';
// import { routes } from './app/app.routes';

// bootstrapApplication(AppComponent, {
//   providers: [provideRouter(routes)],
// });
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()], 
}).catch((err) => console.error(err));



