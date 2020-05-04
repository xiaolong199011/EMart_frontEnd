import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Json} from '../../common/json';
import {Crud} from '../../common/crud';



@Component({
  selector: 'app-categoryInfo',
  templateUrl: './categoryInfo.component.html',
  styleUrls: ['./categoryInfo.component.css']
})
export class CategoryInfoComponent implements OnInit {

  categoryListInfo:JSON[];

  itemvalue:number;

  public categoryinfo:any={
    id:'',
    categoryname:'',
    briefdetails:''
  };

  constructor(public http:HttpClient,public json:Json,public crud:Crud) { }

  ngOnInit() {
    this.getCategoryInfo();
  }

  getCategoryInfo(){
    var controllerURL="/category/getall/";
    this.crud.getAllInfo(controllerURL).subscribe((response:any)=>{
      this.categoryListInfo = response;
    })
  }

  delCategoryById(){
    var controllerURL="/category/del/";
    this.crud.delById(controllerURL,this.itemvalue).subscribe((response:any)=>{
      this.getCategoryInfo();
    });
    
  }
  infoSubmit(){
    var controllerURL="/category/save/";
    return this.crud.saveForm(controllerURL,this.categoryinfo)
    .subscribe((response)=>{
      this.getCategoryInfo();
      this.categoryinfo={};
    });
  }

  updateCategoryInfo(){
    this.categoryinfo=this.crud.updateInfo(this.categoryListInfo,this.itemvalue);
  }

}
