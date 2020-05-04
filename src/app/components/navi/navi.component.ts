import { Component, OnInit } from '@angular/core';
import {BootstrapCom} from '../../common/bootstrapCom'

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  constructor(private bootstrapCom: BootstrapCom) { }

  ngOnInit() {
 this.bootstrapCom.handleTwoOrMoreModal();
  }

  removeSession(){
    sessionStorage.removeItem('token');;
    console.log('sessionStorage:  '+sessionStorage.getItem('token'));
  }
}
