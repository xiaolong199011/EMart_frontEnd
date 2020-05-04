import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ComParam} from './comParam';
import { Json } from './json';
import { Key } from 'protractor';

@Injectable()
export class Crud
{
    constructor(public http:HttpClient,public comParam:ComParam,public json:Json ) { }
    
      getAllInfo(controllerURL:string){
        return this.http.get<any>(this.comParam.url+controllerURL,this.comParam.httpOptions);
      }

      delById(controllerURL:string,itemvalue:number) {
        return this.http.delete(this.comParam.url+controllerURL+itemvalue);
        // .subscribe((response:any)=>{})
      }

      saveForm(controllerURL:string,info:JSON){
        return this.http.post(this.comParam.url+controllerURL,info,this.comParam.httpOptions);
      }

      saveFormWithJsonString(controllerURL:string,info:String){
        console.log(this.comParam.url+controllerURL)
        return this.http.post(this.comParam.url+controllerURL,JSON.stringify(info),this.comParam.httpOptions);
      }
      

      updateInfo(getAllInfoJson:JSON[],selectedItem:any){
        var jsonObject = this.json.getJsonObjectFromObject(getAllInfoJson);
        for (var selectedInfo of jsonObject) {
          if(selectedItem===selectedInfo.id){
              return selectedInfo;
  }
}
  }
}