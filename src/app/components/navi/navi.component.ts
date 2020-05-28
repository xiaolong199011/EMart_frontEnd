import { Component, OnInit } from '@angular/core';
import {BootstrapCom} from '../../common/bootstrapCom'
import { HttpClient} from '@angular/common/http';
import {Crud} from '../../common/crud';
import {ComParam} from '../../common/comParam';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  TransactionItemShopCartListInfo:JSON[];
  TransactionItemPurchaseHistoryListInfo:JSON[];
  ItemsListInfo:JSON[];
  itemvalue:number;
  buyerid:string;
  TransacitonsListInfo:JSON[];
  TransacitonsInfo:any={
    id:'',
    buyerid:'',
    shopcart:'',
    transactiontype:'',
    datetime:'',
    itemid:''
  };

  //for shopcart 1 is ture,0 is false

  constructor(private bootstrapCom: BootstrapCom,public http:HttpClient,private crud:Crud,private comParam:ComParam) { }

  ngOnInit() {
 this.bootstrapCom.handleTwoOrMoreModal();
 this.buyerid = sessionStorage.getItem('userid');
 console.log(this.buyerid);
  }

  removeSession(){
    sessionStorage.removeItem('token');
    console.log('sessionStorage:  '+sessionStorage.getItem('token'));
  }

  getShopCart(){
    
     this.crud.getby(this.comParam.shopCart_getby_url,this.buyerid).subscribe((response:any)=>{
      this.TransactionItemShopCartListInfo = response;
    })
  }

  checkoutCart(){
    this.crud.getby(this.comParam.checkoutCart_getby_url,this.buyerid).subscribe((response:any)=>{
      this.TransacitonsListInfo = response;
    })
  }

  getPurchaseHistory(){
    
    this.crud.getby(this.comParam.purchaseHistory_getby_url,this.buyerid).subscribe((response:any)=>{
      this.TransactionItemPurchaseHistoryListInfo = response;

    })
  }

  getItemsInfo(){
    this.crud.getAllInfo(this.comParam.item_getall_url).subscribe((response:any)=>{
      this.ItemsListInfo = response;


    })
  }

  transactionSave(){

    this.TransacitonsInfo.buyerid = this.buyerid;
    this.TransacitonsInfo.itemid = this.itemvalue;
    this.TransacitonsInfo.shopcart = 1;
    this.TransacitonsInfo.transactiontype = "unknown";
    this.TransacitonsInfo.datetime = new Date();

    return this.crud.saveForm(this.comParam.transaction_save_url, this.TransacitonsInfo)
      .subscribe((response:any) => {
        
this.getShopCart();
      });
  }

}
