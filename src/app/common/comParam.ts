import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
@Injectable()



export class ComParam {
    constructor(public datePipe: DatePipe) { }

    public url = 'http://localhost:8084';
    public zuul_host = 'http://localhost:8084';
    public fileInfo_host = 'http://localhost:8086';

    public fileInfo_path = '/pic/upload';
    public display_file_path = '/upload';
    public item_getall_path = "/items/item/getall/";
    public itemModel_getall_path = "/items/item/getmodel/";
    public itemModel_getby_path = "/items/item/getmodelby/";
    public transaction_save_path = "/order/transactions/save/";
    public shopCart_getby_path = "/order/transactions/getcart/";
    public checkoutCart_getby_path = "/order/transactions/checkoutcart/";
    public transaction_getall_path = "/order/transactions/getall/";
    public transaction_getby_path = "/order/transactions/getby/";
    public purchaseHistory_getby_path = "/order/transactions/purchaseHistory/";


    public item_getall_url = this.zuul_host + this.item_getall_path;
    public itemModel_getby_url = this.zuul_host + this.itemModel_getby_path;
    public itemModel_getall_url = this.zuul_host + this.itemModel_getall_path;
    public display_file_url = this.fileInfo_host + this.display_file_path;
    public transaction_save_url = this.zuul_host + this.transaction_save_path;
    public shopCart_getby_url = this.zuul_host+this.shopCart_getby_path;
    public transaction_getall_url = this.zuul_host+this.transaction_getall_path;
    public transaction_getby_url = this.zuul_host+this.transaction_getby_path;
    public checkoutCart_getby_url = this.zuul_host+this.checkoutCart_getby_path;
    public purchaseHistory_getby_url = this.zuul_host+this.purchaseHistory_getby_path;

    public currentDateTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss')
    public currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm')

    public httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json;application/x-www-form-urlencodeed; charset=utf-8' }) };
}