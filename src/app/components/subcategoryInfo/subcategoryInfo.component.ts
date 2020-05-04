import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Json} from '../../common/json';
import {Crud} from '../../common/crud';

@Component({
  selector: 'app-subcategoryInfo',
  templateUrl: './subcategoryInfo.component.html',
  styleUrls: ['./subcategoryInfo.component.css']
})
export class SubcategoryInfoComponent implements OnInit {

  subCategoryListInfo:any[];
  
  categoryListInfo:JSON[];

  itemvalue:number;

  subCategoryInfo:any={
    id:'',
    subcategoryname:'',
    category:{
      id:'',
      categoryname:'',
      briefdetails:''
    },
    //category:'',
    briefdetails:'',
    gst:'',
    //selectedcategoryid:''
  };
  

 

  constructor(public http:HttpClient,public json:Json,public crud:Crud) { }

  ngOnInit() {
    this.getSubCategoryInfo();
    this.getCategoryInfo();
  }

  getSubCategoryInfo(){
    var controllerURL="/subcategory/getall/";
    this.crud.getAllInfo(controllerURL).subscribe((response:any)=>{
      this.subCategoryListInfo = response;
    })
  }

  delSubCategoryById(){
    var controllerURL="/subcategory/del/";
    this.crud.delById(controllerURL,this.itemvalue).subscribe((response:any)=>{
      this.getSubCategoryInfo();
    });
    
  }
  infoSubmit(){
    var controllerURL="/subcategory/save/";    
    this.subCategoryInfo.category=this.crud.updateInfo(this.categoryListInfo,Number(this.subCategoryInfo.category));
    return this.crud.saveForm(controllerURL,this.subCategoryInfo)
    .subscribe((response)=>{
      this.getSubCategoryInfo();
      this.subCategoryInfo={};
    });
  }

  updateSubCategoryInfo(){
    this.subCategoryInfo=this.crud.updateInfo(this.subCategoryListInfo,this.itemvalue);
  }

  getCategoryInfo(){
    var controllerURL="/category/getall/";
    this.crud.getAllInfo(controllerURL).subscribe((response:any)=>{
      
      this.categoryListInfo = response;
    })
  }


}
