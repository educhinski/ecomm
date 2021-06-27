import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { SellerRegisterComponent } from './components/seller-register/seller-register.component';

const routes: Routes = [
  { path: '', component: SellerHomeComponent },
  { path: 'register/:step', component: SellerRegisterComponent },
  { path: 'register', redirectTo: 'register/1', pathMatch: 'full' },
];

@NgModule({
  declarations: [SellerHomeComponent, SellerRegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
})
export class SellerModule {}
