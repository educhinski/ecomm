import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { OverviewComponent } from './components/admin/overview/overview.component';
import { CartComponent } from './components/cart/cart.component';

import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/user/account/account.component';
import { CheckoutComponent } from './components/user/account/checkout/checkout.component';
import { ConfirmedComponent } from './components/user/account/checkout/confirmed/confirmed.component';
import { DeliveryComponent } from './components/user/account/checkout/delivery/delivery.component';
import { PaymentComponent } from './components/user/account/checkout/payment/payment.component';
import { SummaryComponent } from './components/user/account/checkout/summary/summary.component';
import { OrdersComponent } from './components/user/account/orders/orders.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'account/orders/checkout',
        component: CheckoutComponent,
        children: [
          { path: 'delivery', component: DeliveryComponent },
          { path: 'payment', component: PaymentComponent },
          { path: 'summary', component: SummaryComponent },
          { path: '', redirectTo: 'delivery', pathMatch: 'full' },
        ],
      },
      { path: 'account/orders/confirmed', component: ConfirmedComponent },
      { path: 'account/orders', component: OrdersComponent },
      { path: 'account', component: AccountComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
    ],
  },
  { path: 'cart', component: CartComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
