import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router'
import {Json} from '../../common/json';
import {Crud} from '../../common/crud';
import {ComParam} from '../../common/comParam';
//import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-productDetail',
  templateUrl: './productDetail.component.html',
  styleUrls: ['./productDetail.component.css'],
  //providers:[DatePipe]
})
export class ProductDetailComponent implements OnInit {
  userId:string;
  id:number;
  fileUrl:string = this.comParam.display_file_url;
  //currentDateTime:any;

 public itemsListInfo:JSON[];
iteminfo:any={
  id: "",
  categoryid:"",
  subcategoryid: "",
  price:"" ,
  itemname: "",
  description: "",
  stocknumber: "",
  remarks: "",
  fileinfoid: "",
  filename: "",
  sellerid:""
 };

//  userinfo:any={
//   id:'',
//   username:'',
//   password:'',
//   email:'',
//   mobilenumber:''
// };

//for shopcart 1 is ture,0 is false
transactioninfo: any = {
  id: "",
  buyerid: this.userId,
  sellerid: this.iteminfo.sellerid,
  shopcart: 1,
  itemid:"",
  transactiontype: "",
  datetime:new Date(),
}
//this.comParam.currentDate

  constructor(private routeinfo:ActivatedRoute,private json:Json,private crud:Crud, private comParam:ComParam) { }

  ngOnInit() {
    this.id=this.routeinfo.snapshot.queryParams['id'];
    console.log(this.routeinfo.snapshot.queryParams['id']);
    this.getByItemInfo(this.id);
    this.userId = sessionStorage.getItem('userid');
    //this.currentDateTime =this.comParam.currentDateTime;
    console.log(this.comParam.currentDate);
    
  }


  getByItemInfo(id:number){
   
    this.crud.getAllInfo(this.comParam.itemModel_getby_url+id).subscribe((response:any)=>{
      this.iteminfo = response;
      console.log(this.iteminfo);
    })
  }

  transactionSave(){
    this.transactioninfo.buyerid = this.userId;
    this.transactioninfo.sellerid = this.iteminfo.sellerid;
    this.transactioninfo.itemid = this.iteminfo.id;
    this.transactioninfo.shopcart = 1;
    this.transactioninfo.transactiontype = "unknown";
    return this.crud.saveForm(this.comParam.transaction_save_url, this.transactioninfo)
      .subscribe((response) => {

      });
  }

}
