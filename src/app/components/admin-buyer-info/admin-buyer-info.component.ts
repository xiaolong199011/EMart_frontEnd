import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Json} from '../../common/json';
import {Crud} from '../../common/crud';

@Component({
  selector: 'app-admin-buyer-info',
  templateUrl: './admin-buyer-info.component.html',
  styleUrls: ['./admin-buyer-info.component.css']
})
export class AdminBuyerInfoComponent implements OnInit {


  buyerListInfo:JSON[];
  buyInfo:JSON;

  itemvalue:number;

   userinfo:any={
    id:'',
    username:'',
    password:'',
    email:'',
    mobilenumber:''
  };

  constructor(public http:HttpClient,public json:Json,public crud:Crud) { }

  ngOnInit(): void {
    this.getBuyerInfo()
  }
  getBuyerInfo(){
    var controllerURL="/buyer/getall/";
    this.crud.getAllInfo(controllerURL).subscribe((response:any)=>{
      this.buyerListInfo = response;
    })
    //console.log(this.crud.getAllInfo(this.api));
  }
  delBuyerId(){
    var controllerURL="/buyer/del/";
    this.crud.delById(controllerURL,this.itemvalue).subscribe((response:any)=>{
      this.getBuyerInfo();
    });
    
  }
  infoSubmit(){
    var controllerURL="/buyer/save/";
    return this.crud.saveForm(controllerURL,this.userinfo)
    .subscribe((response)=>{
      this.getBuyerInfo();
      this.userinfo={};
    });
  }

  updateInfo(){
    this.userinfo=this.crud.updateInfo(this.buyerListInfo,this.itemvalue);
  }
}