import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

export const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'order-summary', component: OrderSummaryComponent },
];
