import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';
import { LogininComponent } from './components/loginin/loginin.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminBuyerInfoComponent } from './components/admin-buyer-info/admin-buyer-info.component';
import { AdminSellerInfoComponent } from './components/admin-seller-info/admin-seller-info.component';
import { HomeComponent } from './components/home/home.component';
import { WelcomePageComponent } from './components/welcomePage/welcomePage.component';
import { ItemsComponent } from './components/items/items.component';
import { CategoryInfoComponent } from './components/categoryInfo/categoryInfo.component';
import { SubcategoryInfoComponent } from './components/subcategoryInfo/subcategoryInfo.component';
import { CartComponent } from './components/cart/cart.component';
import { NaviComponent } from './components/navi/navi.component';
import { ProductDetailComponent } from './components/productDetail/productDetail.component';
import {SigninGuard} from './guard/signin.guard';


const routes: Routes = [
  {
    path:'admin',component:AdminComponent,canActivate: [SigninGuard],
    children:[
      
      {path:'subCategoryInfo',component:SubcategoryInfoComponent,canActivate: [SigninGuard]},
      {path:'categoryInfo',component:CategoryInfoComponent,canActivate: [SigninGuard]},
      {path:'items',component:ItemsComponent,canActivate: [SigninGuard]},
      {path:'WelcomePageComponent',component:WelcomePageComponent,canActivate: [SigninGuard]},
      {path:'adminsellerinfo',component:AdminSellerInfoComponent,canActivate: [SigninGuard]},
      {path:'adminbuyerinfo',component:AdminBuyerInfoComponent,canActivate: [SigninGuard]},
      {path:'**',redirectTo:'WelcomePageComponent',canActivate: [SigninGuard]}
    ]
  },
  {path:'productDetail',component:ProductDetailComponent},
  {path:'navi',component:NaviComponent ,canActivate: [SigninGuard]},
  {path:'cart',component:CartComponent ,canActivate: [SigninGuard]},
  {path:'home',component:HomeComponent},
  {path:'admin',component:AdminComponent ,canActivate: [SigninGuard]},
  {path:'login',component:LogininComponent },
  {path:'register',component:RegisterComponent},
  {path:'index',component:IndexComponent ,canActivate: [SigninGuard]},
  {path:'**',redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
