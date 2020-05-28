import { Component, OnInit } from '@angular/core';
import {Json} from '../../common/json';
import {Crud} from '../../common/crud';
import {ComParam} from '../../common/comParam';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemsListInfo:JSON[];

  constructor(private json:Json,private crud:Crud, private comParam:ComParam) { }

  ngOnInit(): void {
    this.getItemsInfo();
  }

  getItemsInfo(){

    this.crud.getAllInfo(this.comParam.itemModel_getall_url).subscribe((response:any)=>{
      this.itemsListInfo = response;
      console.log(this.itemsListInfo);
    })
    //console.log(this.crud.getAllInfo(this.api));
  }

}
