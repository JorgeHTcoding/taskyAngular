import { Component, OnInit } from '@angular/core';
import {trigger, style, transition, animate, state} from '@angular/animations'
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations:[
    trigger('enterRegister', [
      state('inactive',style({
        transform:'translateX(100%)',
        opacity:0
      })),
      state('active',style({
        transform:'translateX(0%)',
        opacity:1
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out')),
      
    ])
  ]
})
export class LandingPageComponent implements OnInit {
  public state:string ="inactive";
  public state2:string ="active";
  public log:boolean = false;
  public reg:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  trigger(){
    this.state = this.state=== 'active' ? 'inactive' :'active'
    this.state2 = this.state2=== 'active' ? 'inactive' :'active'
    
  }
  triggerLog(){
    if(this.log)
    this.trigger()
    this.log = true
    this.reg = false
  }
  
  triggerReg(){
    if(this.reg){
        this.trigger();
      }
    this.log = false
    this.reg = true;
    
  }
  
}