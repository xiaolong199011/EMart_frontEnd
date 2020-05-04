import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminSellerInfoComponent } from './admin-seller-info.component';

const routes: Routes = [
  {path:'',component:AdminSellerInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminSellerInfoRoutingModule { }
