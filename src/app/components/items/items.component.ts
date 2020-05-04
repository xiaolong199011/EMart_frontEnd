import { Component, OnInit,Input } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Json} from '../../common/json';
import {Crud} from '../../common/crud';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemListInfo:JSON[];

   itemInfo:any={
    id:'',
    categoryid:'',
    subcategoryid:'',
    price:'',
    itemname:'',
    description:'',
    stocknumber:''
  };

  itemvalue:number;

  constructor(public http:HttpClient,public json:Json,public crud:Crud) { }

  ngOnInit() {
    this.getItemInfo();
  }
  getItemInfo(){
    var controllerURL="/items/getall/";
    this.crud.getAllInfo(controllerURL).subscribe((response:any)=>{
      this.itemListInfo = response;
    })
  }

  delItemId(){
    var controllerURL="/items/del/";
    this.crud.delById(controllerURL,this.itemvalue).subscribe((response:any)=>{
      this.getItemInfo();
    });
    
  }

  infoSubmit(){
    var controllerURL="/items/save/";
    return this.crud.saveForm(controllerURL,this.itemInfo)
    .subscribe((response)=>{
      this.getItemInfo();
      this.itemInfo={};
    });
  }
  updateInfo(){
    this.itemInfo=this.crud.updateInfo(this.itemListInfo,this.itemvalue);
  }
}
