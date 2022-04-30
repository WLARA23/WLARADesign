import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageServiceService } from 'src/app/services/language-service.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //VARIABLES 
  languagesJSON$: Observable<any>;  
  screen:number = 0;

  //CONSTRUCTOR
  constructor(languageService:LanguageServiceService) { 
    this.languagesJSON$ = languageService.languageObservable;
  }

  ngOnInit(): void {
    this.screen = window.innerWidth;
  }

  @HostListener ('window:resize', []) onResize(){
    this.screen = window.innerWidth;
  }

}
