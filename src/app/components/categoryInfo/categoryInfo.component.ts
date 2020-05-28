import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Json} from '../../common/json';
import {Crud} from '../../common/crud';
import {ComParam} from '../../common/comParam';



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

  constructor(private http:HttpClient,private json:Json,private crud:Crud,private comParam:ComParam) { }

  ngOnInit() {
    this.getCategoryInfo();
  }

  getCategoryInfo(){
    var categoryInfo_getall_path="/items/category/getall/";
    var categoryInfo_getall_url = this.comParam.zuul_host+categoryInfo_getall_path;
    this.crud.getAllInfo(categoryInfo_getall_url).subscribe((response:any)=>{
      this.categoryListInfo = response;
    })
  }

  delCategoryById(){
    var categoryInfo_delby_path="/items/category/del/";
    var categoryInfo_delby_url = this.comParam.zuul_host+categoryInfo_delby_path;
    this.crud.delById(categoryInfo_delby_url,this.itemvalue).subscribe((response:any)=>{
      this.getCategoryInfo();
    });
    
  }
  infoSubmit(){
    var categoryInfo_save_path="/items/category/save/";
    var categoryInfo_save_url = this.comParam.zuul_host+categoryInfo_save_path;
    return this.crud.saveForm(categoryInfo_save_url,this.categoryinfo)
    .subscribe((response)=>{
      this.getCategoryInfo();
      this.categoryinfo={};
    });
  }

  updateCategoryInfo(){
    this.categoryinfo=this.crud.updateInfo(this.categoryListInfo,this.itemvalue);
  }

}
