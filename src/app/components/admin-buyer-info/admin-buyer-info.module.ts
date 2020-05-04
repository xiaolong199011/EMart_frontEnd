import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminBuyerInfoRoutingModule } from './admin-buyer-info-routing.module';
import { AdminBuyerInfoComponent } from './admin-buyer-info.component';

@NgModule({
  declarations: [AdminBuyerInfoComponent],
  imports: [
    CommonModule,
    AdminBuyerInfoRoutingModule
  ]
})
export class AdminBuyerInfoModule { }
