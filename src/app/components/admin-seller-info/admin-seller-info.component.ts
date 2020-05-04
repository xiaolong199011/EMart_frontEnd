import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import {Json} from '../../common/json';
import {Crud} from '../../common/crud';

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

  constructor(public http:HttpClient,public json:Json,public crud:Crud) { }

  ngOnInit(): void {
     this.getSellerInfo();
  }
  getSellerInfo(){
    var controllerURL="/seller/getall/";
    this.crud.getAllInfo(controllerURL).subscribe((response:any)=>{
      this.sellerListInfo = response;
    })
  }

  delSellerById(){
    var controllerURL="/seller/del/";
    this.crud.delById(controllerURL,this.itemvalue).subscribe((response:any)=>{
      this.getSellerInfo();
    });
  }

  infoSubmit(){
    var controllerURL="/seller/save/";
    return this.crud.saveForm(controllerURL,this.userinfo)
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