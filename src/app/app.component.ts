import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LanguageServiceService } from './services/language-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //VARIABLES
  title = 'WLARADesign';

  languagesJSON$: Observable<any>;
  language:string = "Español";

  home:boolean = true;
  skills:boolean = false;
  portfolio:boolean = false;
  about:boolean = false;
  contact:boolean = false;
  project:boolean = false;

  menu:boolean = false;

  screen:number = 0;

  //CONSTRUCTOE
  constructor(private languageService:LanguageServiceService){
    this.languagesJSON$ = languageService.languageObservable;
  }

  ngOnInit(): void {
    this.screen = window.innerWidth;
  }

  @HostListener ("window:resize", []) onResize(){
    this.screen = window.innerWidth; 
  }

  scrollUp():void{
    window.scroll(0, 0);
  }

  openMenu():void{
    if(this.menu){
      this.menu = false;
    }else{
      this.menu = true;
    }
  }

  openHome():void {
    this.home = true;
    this.skills = false;
    this.portfolio = false;
    this.about = false;
    this.contact = false;
    this.project = false;

    this.menu = false;
    this.scrollUp();
  }

  openSkills():void {
    this.home = false;
    this.skills = true;
    this.portfolio = false;
    this.about = false;
    this.contact = false;
    this.project = false;

    this.menu = false;
    this.scrollUp();
  }

  openPortfolio():void {
    this.home = false;
    this.skills = false;
    this.portfolio = true;
    this.about = false;
    this.contact = false;
    this.project = false;

    this.menu = false;
    this.scrollUp();
  }

  openAbout():void {
    this.home = false;
    this.skills = false;
    this.portfolio = false;
    this.about = true;
    this.contact = false;
    this.project = false;

    this.menu = false;
    this.scrollUp();
  }

  openContact():void {
    this.home = false;
    this.skills = false;
    this.portfolio = false;
    this.about = false;
    this.contact = true;
    this.project = false;

    this.menu = false;
    this.scrollUp();
  }

  openProject():void {
    this.home = false;
    this.skills = false;
    this.portfolio = false;
    this.about = false;
    this.contact = false;
    this.project = true;

    this.menu = false;
    this.scrollUp();
  }

  changeLanguage():void{
    let languageElement = document.getElementById("language");
    let languageMobileElement = document.getElementById("languageMobile");
    if(languageElement?.textContent == "Español"){
      this.language = "English";
      languageElement.innerHTML = this.language;
    }else if(languageElement?.textContent == "English"){
      this.language = "Español";
      languageElement.innerHTML = this.language;
    }
    if(languageMobileElement?.textContent == "Español"){
      this.language = "English";
      languageMobileElement.innerHTML = this.language;
    }else if(languageMobileElement?.textContent == "English"){
      this.language = "Español";
      languageMobileElement.innerHTML = this.language;
    }
    this.languageService.changeLanguage(this.language);
    this.languagesJSON$ = this.languageService.languageObservable;
  }
}
