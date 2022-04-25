import { Component, HostListener, Input, OnInit } from '@angular/core';

import languages from 'src/assets/json/languages.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  languagesJSON: any = languages;
  @Input() languagePosition = 0;

  screen:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.screen = window.innerWidth;
  }

  @HostListener ('window:resize', []) onResize(){
    this.screen = window.innerWidth;
  }

}
