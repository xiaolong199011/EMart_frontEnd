import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminSellerInfoRoutingModule } from './admin-seller-info-routing.module';
import { AdminSellerInfoComponent } from './admin-seller-info.component';

@NgModule({
  declarations: [AdminSellerInfoComponent],
  imports: [
    CommonModule,
    AdminSellerInfoRoutingModule
  ]
})
export class AdminSellerInfoModule { }
