import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path:'/admin/adminsellerinfo',loadChildren: () => import('./../admin-buyer-info/admin-buyer-info.module').then(mod => mod.AdminBuyerInfoModule)
  //   },
  // {
  //   path:'adminsellerinfo',loadChildren: () => import('./../admin-seller-info/admin-seller-info.module').then(mod => mod.AdminSellerInfoModule)
  //   },

  // // {path:'adminsellerinfo',loadChildren:'./components/admin-seller-info/admin-seller-info.module#AdminSellerInfoModule'},
  // {path:'/admin/adminbuyerinfo',loadChildren:'././admin.module#AdminModule'}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
