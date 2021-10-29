import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  screen:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.screen = window.innerWidth;
  }

  @HostListener ('window:resize', []) onResize(){
    this.screen = window.innerWidth;
  }

}
