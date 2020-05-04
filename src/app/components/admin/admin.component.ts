import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Crud} from '../../common/crud'
//import {CrudModule} from '../../common/crud/crud.module' ,public crud:CrudModule



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

//
  constructor(public http:HttpClient,public crud:Crud) { }

  ngOnInit(): void {
    //this.crud.test()
  }


  // getInfo(api:string){
  //   const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};

  //   this.http.get(api).subscribe((response:any)=>{
    
  //     console.log('buyer:'+response);

  //     return response;
 
  //     //JSON.stringify(response);
  //   })
  // }

}
