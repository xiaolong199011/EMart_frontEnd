import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import {Json} from '../../common/json';
import {Crud} from '../../common/crud';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginin',
  templateUrl: './loginin.component.html',
  styleUrls: ['./loginin.component.css']
})

// interface Alert {
//   type: string;
//   message: string;
// }

// const ALERTS: Alert[] = [];

export class LogininComponent implements OnInit {

   userinfo:any={
    username:'',
    password:'',
    // lastLoginTime:new Date()
    roleList:['admin','buyer','seller'],
    role:'buyer'
  }

  responseInfo:any={

    id:'',
    errornum:'',
    errormsg:'',
    userName:'',
    token:''
  }

  constructor(public http:HttpClient,public json:Json,public crud:Crud,private router: Router) { }

  ngOnInit(): void {
  }

  loginSubmit(){
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    var api = '/user/login/';
     //this.crud.saveForm(api,this.userinfo);
     this.crud.saveFormWithJsonString(api,this.userinfo).subscribe((response:any)=>{
      this.responseInfo = response;
      if(200===this.responseInfo.errornum){
        sessionStorage.setItem('token', this.responseInfo.token);
        this.router.navigate(['home']);
      }else{
        alert(this.responseInfo.errormsg);
      }
     console.log(response);
    });
    console.log(JSON.stringify(this.userinfo));

    
  }

}
