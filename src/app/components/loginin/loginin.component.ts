import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import {Json} from '../../common/json';
import {Crud} from '../../common/crud';
import { Router } from '@angular/router';
import {ComParam} from '../../common/comParam';

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
    role:''
  }

  responseInfo:any={

    id:'',
    errornum:'',
    errormsg:'',
    userName:'',
    token:''
  }

  constructor(public http:HttpClient,public json:Json,public crud:Crud,private router: Router,private comParam:ComParam) { }

  ngOnInit(): void {
  }

  loginSubmit(){
    const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
    var login_path = '/user/unknownUser/login/';
    var login_url = this.comParam.zuul_host+login_path;
      this.crud.saveFormWithJsonString(login_url,this.userinfo).subscribe((response:any)=>{
      this.responseInfo = response;
      if(200===this.responseInfo.errornum){
        sessionStorage.setItem('token', this.responseInfo.token);
        sessionStorage.setItem('userid', this.responseInfo.id);
        this.router.navigate(['home']);
      }else{
        alert(this.responseInfo.errormsg);
      }
     console.log(response);
    });
    console.log(JSON.stringify(this.userinfo));

    
  }

}
