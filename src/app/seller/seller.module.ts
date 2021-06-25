import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SellerHomeComponent } from './components/seller-home/seller-home.component';

const routes: Routes = [{ path: '', component: SellerHomeComponent }];

@NgModule({
  declarations: [SellerHomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SellerModule {}
