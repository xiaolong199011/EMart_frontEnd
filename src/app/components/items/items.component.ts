import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Json } from '../../common/json';
import { Crud } from '../../common/crud';
import { ComParam } from '../../common/comParam';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
  
})
export class ItemsComponent implements OnInit {
  userId: String;
  itemListInfo: JSON[];

  itemInfo: any = {
    id: '',
    categoryid: '',
    subcategoryid: '',
    price: '',
    itemname: '',
    description: '',
    stocknumber: '',
    sellerid: this.userId
  };





  itemvalue: number;

  constructor(public http: HttpClient, public json: Json, public crud: Crud, private renderer: Renderer2, private el: ElementRef, private comParam: ComParam) { }

  ngOnInit() {
    this.getItemInfo();

    //add fileinfo url to form action
    var formAction = this.el.nativeElement.querySelector('#picupload');
    var fileinfoUrl = this.comParam.fileInfo_host + this.comParam.fileInfo_path;
    console.log(fileinfoUrl);
    this.renderer.setAttribute(formAction, 'action', fileinfoUrl);
    console.log(formAction);
    this.userId = sessionStorage.getItem('userid');

  }
  getItemInfo() {
    this.crud.getAllInfo(this.comParam.item_getall_url).subscribe((response: any) => {
      this.itemListInfo = response;
    })
  }

  delItemId() {
    var items_delby_path = "/items/item/del/";
    var items_delby_url = this.comParam.zuul_host + items_delby_path;
    this.crud.delById(items_delby_url, this.itemvalue).subscribe((response: any) => {
      this.getItemInfo();
    });

  }

  infoSubmit() {
    var seller_save_path = "/items/item/save/";
    var seller_save_url = this.comParam.zuul_host + seller_save_path;
    return this.crud.saveForm(seller_save_url, this.itemInfo)
      .subscribe((response) => {
        this.getItemInfo();
        this.itemInfo = {};
      });
  }
  updateInfo() {
    this.itemInfo = this.crud.updateInfo(this.itemListInfo, this.itemvalue);
  }

  upload() {
    var myForm = <HTMLFormElement>document.getElementById('picupload');
    myForm.submit();
  }



  // upload(){
  //   var formData = new FormData();
  //   var formData = new FormData();
  //   formData.append('photo', document.getElementById('photoFile').val);
  //   console.log("upload")
  //   $.ajax({
  //     type: "POST",
  //     url: "/url.do",
  //     data: params,
  //     dataType : "json",
  //     contentType: false,
  //     processData: false,
  //     success: function(respMsg){
  //     }
  //  });
  // }
}
