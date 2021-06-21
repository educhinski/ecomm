import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { BrandsComponent } from './components/brands/brands.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/admin/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { OverviewComponent } from './components/admin/overview/overview.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ChartsModule } from 'ng2-charts';
import { CardComponent } from './components/admin/card/card.component';
import { AnnualSalesChartComponent } from './components/admin/charts/annual-sales-chart/annual-sales-chart.component';
import { AccountComponent } from './components/user/account/account.component';
import { OrdersComponent } from './components/user/account/orders/orders.component';
import { CheckoutComponent } from './components/user/account/checkout/checkout.component';
import { DeliveryComponent } from './components/user/account/checkout/delivery/delivery.component';
import { PaymentComponent } from './components/user/account/checkout/payment/payment.component';
import { SummaryComponent } from './components/user/account/checkout/summary/summary.component';
import { ConfirmedComponent } from './components/user/account/checkout/confirmed/confirmed.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    HighlightsComponent,
    ProductsGridComponent,
    BrandsComponent,
    UserComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    NavComponent,
    OverviewComponent,
    CardComponent,
    AnnualSalesChartComponent,
    AccountComponent,
    OrdersComponent,
    CheckoutComponent,
    DeliveryComponent,
    PaymentComponent,
    SummaryComponent,
    ConfirmedComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
