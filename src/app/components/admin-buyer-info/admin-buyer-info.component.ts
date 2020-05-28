import { Component, OnInit,Renderer2,ElementRef} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Json} from '../../common/json';
import {Crud} from '../../common/crud';
import {ComParam} from '../../common/comParam';
declare var $:any;
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

  constructor(public http:HttpClient,public json:Json,public crud:Crud,private renderer: Renderer2,private el: ElementRef,private comParam:ComParam) { }

  ngOnInit(): void {
    //init page
    this.getBuyerInfo();
  }
  //euraka:
  getBuyerInfo(){
    var buyer_getall_path="/user/buyer/getall/";
    var buyer_getall_url = this.comParam.zuul_host+buyer_getall_path;
    this.crud.getAllInfo(buyer_getall_url).subscribe((response:any)=>{
      this.buyerListInfo = response;
    })
  }
  delBuyerId(){
    var buyer_delby_path="/user/buyer/del/";
    var buyer_delby_url = this.comParam.zuul_host+buyer_delby_path;
    this.crud.delById(buyer_delby_url,this.itemvalue).subscribe((response:any)=>{
      this.getBuyerInfo();
    });
    
  }
  infoSubmit(){
    var buyer_save_path="/user/buyer/save/";
    var buyer_save_url = this.comParam.zuul_host+buyer_save_path;
    return this.crud.saveForm(buyer_save_url,this.userinfo)
    .subscribe((response)=>{
      this.getBuyerInfo();
      this.userinfo={};
    });
  }

  updateInfo(){
    this.userinfo=this.crud.updateInfo(this.buyerListInfo,this.itemvalue);
  }

}