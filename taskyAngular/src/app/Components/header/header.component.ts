import { Component, EventEmitter, OnInit } from '@angular/core';
import { LandingPageComponent } from 'src/app/Pages/landing-page/landing-page.component';
import { Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public logged:boolean = true;
  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    this.newItemEvent.emit(true)
  }
}
