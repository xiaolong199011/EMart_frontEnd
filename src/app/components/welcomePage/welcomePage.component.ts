import { Component, OnInit,Renderer2,ElementRef} from '@angular/core';
import {ComParam} from '../../common/comParam';


@Component({
  selector: 'app-welcomePage',
  templateUrl: './welcomePage.component.html',
  styleUrls: ['./welcomePage.component.css']
})
export class WelcomePageComponent implements OnInit {

  constructor(private renderer: Renderer2,private el: ElementRef,private comParam:ComParam) { }



  ngOnInit() {
    var formAction = this.el.nativeElement.querySelector('.container form');
    var fileinfoUrl = this.comParam.fileInfo_host+this.comParam.fileInfo_path;
    this.renderer.setAttribute(formAction,'action',fileinfoUrl);
    console.log(formAction);
  }

 // console.log(this.element.nativeElement.querySelector('#musicPlayer'));
}

