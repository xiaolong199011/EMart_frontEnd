import { Component, OnInit } from '@angular/core';
import {Json} from '../../common/json';
import {Crud} from '../../common/crud';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemsListInfo:JSON[];

  constructor(private json:Json,private crud:Crud) { }

  ngOnInit(): void {
    this.getItemsInfo();
  }

  getItemsInfo(){
    var controllerURL="/items/getall/";
    this.crud.getAllInfo(controllerURL).subscribe((response:any)=>{
      this.itemsListInfo = response;
      console.log(this.itemsListInfo);
    })
    //console.log(this.crud.getAllInfo(this.api));
  }

}
