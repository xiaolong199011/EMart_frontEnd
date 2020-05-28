import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { IndexComponent } from './components/index/index.component';
import { HttpClientModule,HttpClientJsonpModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogininComponent } from './components/loginin/loginin.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminBuyerInfoComponent } from './components/admin-buyer-info/admin-buyer-info.component';
import { AdminSellerInfoComponent } from './components/admin-seller-info/admin-seller-info.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { CategoryInfoComponent } from './components/categoryInfo/categoryInfo.component';
import { SubcategoryInfoComponent } from './components/subcategoryInfo/subcategoryInfo.component';
import { ProductDetailComponent } from './components/productDetail/productDetail.component';
import { CartComponent } from './components/cart/cart.component';
import { NaviComponent } from './components/navi/navi.component';

import {Crud} from './common/crud';
import { Json } from './common/json';
import {ComParam} from './common/comParam';
import {JwtInterceptor} from './interceptor/jwt.interceptor';
import {BootstrapCom} from './common/bootstrapCom'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    IndexComponent,
    LogininComponent,
    AdminComponent,
    AdminBuyerInfoComponent,
    AdminSellerInfoComponent,
    HomeComponent,
    ItemsComponent,
    CategoryInfoComponent,
    SubcategoryInfoComponent,
    CartComponent,
    NaviComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    
  ],
  //exports:[Crud,Json],
  providers: [Crud,Json,ComParam,{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },BootstrapCom,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
