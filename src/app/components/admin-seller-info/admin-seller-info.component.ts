import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import {Json} from '../../common/json';
import {Crud} from '../../common/crud';
import {ComParam} from '../../common/comParam';

@Component({
  selector: 'app-admin-seller-info',
  templateUrl: './admin-seller-info.component.html',
  styleUrls: ['./admin-seller-info.component.css']
})
export class AdminSellerInfoComponent implements OnInit {

  sellerListInfo:JSON[];
  itemvalue:number;

   userinfo:any={
    id:'',
    username:'',
    password:'',
    companyname:'',
    gstin:'',
    briefaboutcompany:'',
    postaladdress:'',
    website:'',
    email:'',
    contactnumber:''
  };

  protected items:any[];
  protected checkoutForm:any;

  constructor(private http:HttpClient,private json:Json,private crud:Crud, private comParam:ComParam) { }

  ngOnInit(): void {
     this.getSellerInfo();
  }
  getSellerInfo(){
    var seller_getall_path="/user/seller/getall/";
    var seller_getall_url = this.comParam.zuul_host+seller_getall_path;
    this.crud.getAllInfo(seller_getall_url).subscribe((response:any)=>{
      this.sellerListInfo = response;
    })
  }

  delSellerById(){
    var seller_delby_path="/user/seller/del/";
    var seller_delby_url = this.comParam.zuul_host+seller_delby_path;
    this.crud.delById(seller_delby_url,this.itemvalue).subscribe((response:any)=>{
      this.getSellerInfo();
    });
  }

  infoSubmit(){
    var seller_save_path="/user/seller/save/";
    var seller_save_url = this.comParam.zuul_host+seller_save_path;
    return this.crud.saveForm(seller_save_url,this.userinfo)
    .subscribe((response)=>{
      this.getSellerInfo();
      this.userinfo={};
      //this.triggerForm();
    });
  }

  updateInfo(){

    this.userinfo=this.crud.updateInfo(this.sellerListInfo,this.itemvalue);
  }
}