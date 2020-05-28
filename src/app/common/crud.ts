import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ComParam} from './comParam';
import { Json } from './json';
import { Key } from 'protractor';

@Injectable()
export class Crud
{
    constructor(public http:HttpClient,public comParam:ComParam,public json:Json ) { }
    
      // getAllInfo(controllerURL:string){
      //   return this.http.get<any>(this.comParam.url+controllerURL,this.comParam.httpOptions);
      // }

          getAllInfo(url:string){
        return this.http.get<any>(url,this.comParam.httpOptions);
      }

      // delById(controllerURL:string,itemvalue:number) {
      //   return this.http.delete(this.comParam.url+controllerURL+itemvalue);
      // }

      delById(url:string,itemvalue:number) {
        return this.http.delete(url+itemvalue);
      }

      saveForm(url:string,info:JSON){
        return this.http.post(url,info,this.comParam.httpOptions);
      }

      saveFormWithJsonString(url:string,info:String){
        console.log(url)
        return this.http.post(url,JSON.stringify(info),this.comParam.httpOptions);
        
      }
      
      updateInfo(getAllInfoJson:JSON[],selectedItem:any){
        var jsonObject = this.json.getJsonObjectFromObject(getAllInfoJson);
        for (var selectedInfo of jsonObject) {
          if(selectedItem===selectedInfo.id){
              return selectedInfo;
  }
}
  }
      getby(url:string,id:string){
        return this.http.get(url+id,this.comParam.httpOptions);
      }
}