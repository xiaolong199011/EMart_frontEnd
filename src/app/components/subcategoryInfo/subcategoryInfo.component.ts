import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Json} from '../../common/json';
import {Crud} from '../../common/crud';
import {ComParam} from '../../common/comParam';

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
  

 

  constructor(private http:HttpClient,private json:Json,private crud:Crud, private comParam:ComParam) { }

  ngOnInit() {
    this.getSubCategoryInfo();
    this.getCategoryInfo();
  }

  getSubCategoryInfo(){
    var subCategoryInfo_getall_path="/items/subcategory/getall/";
    var subCategoryInfo_getall_url = this.comParam.zuul_host+subCategoryInfo_getall_path;
    this.crud.getAllInfo(subCategoryInfo_getall_url).subscribe((response:any)=>{
      this.subCategoryListInfo = response;
    })
  }

  delSubCategoryById(){
    var subCategoryInfo_delby_path="/items/subcategory/del/";
    var subCategoryInfo_delby_url = this.comParam.zuul_host+subCategoryInfo_delby_path;
    this.crud.delById(subCategoryInfo_delby_url,this.itemvalue).subscribe((response:any)=>{
      this.getSubCategoryInfo();
    });
    
  }
  infoSubmit(){
    var subCategoryInfo_save_path="/items/subcategory/save/";    
    var subCategoryInfo_save_url = this.comParam.zuul_host+subCategoryInfo_save_path;
    this.subCategoryInfo.category=this.crud.updateInfo(this.categoryListInfo,Number(this.subCategoryInfo.category));
    return this.crud.saveForm(subCategoryInfo_save_url,this.subCategoryInfo)
    .subscribe((response)=>{
      this.getSubCategoryInfo();
      this.subCategoryInfo={};
    });
  }

  updateSubCategoryInfo(){
    this.subCategoryInfo=this.crud.updateInfo(this.subCategoryListInfo,this.itemvalue);
  }

  getCategoryInfo(){
    var categoryInfo_getall_path="/items/category/getall/";
    var categoryInfo_getall_url = this.comParam.zuul_host+categoryInfo_getall_path;
    this.crud.getAllInfo(categoryInfo_getall_url).subscribe((response:any)=>{
      
      this.categoryListInfo = response;
    })
  }


}
