import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  urlsplit:string[] = [];
  newURL = "";

  home:boolean = true;
  skills:boolean = false;
  portfolio:boolean = false;
  about:boolean = false;
  contact:boolean = false;
  project:boolean = false;

  menu:boolean = false;

  screen:number = 0;

  //CONSTRUCTOE
  constructor(private languageService:LanguageServiceService, public activatedRoute:ActivatedRoute, public router:Router){
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
    if(languageElement?.textContent == "ES"){
      this.language = "EN";
      languageElement.innerHTML = this.language;
      this.languageService.LanguageURLData = "en";
    }else if(languageElement?.textContent == "EN"){
      this.language = "ES";
      languageElement.innerHTML = this.language;
      this.languageService.LanguageURLData = "es";
    }
    if(languageMobileElement?.textContent == "ES"){
      this.language = "EN";
      languageMobileElement.innerHTML = this.language;
      this.languageService.LanguageURLData = "en";
    }else if(languageMobileElement?.textContent == "EN"){
      this.language = "ES";
      languageMobileElement.innerHTML = this.language;
      this.languageService.LanguageURLData = "es";
    }
    //console.log(this.languageService.languageURLObservable);

    /*
    console.log(this.router.url);
    this.urlsplit = this.router.url.split('/');
    this.urlsplit[1] = "en/";
    this.newURL = "";
    console.log(this.urlsplit);
    for(let i = 0; i < this.urlsplit.length; i++){
      this.newURL += this.urlsplit[i];
    }
    this.router.navigate([this.newURL]);
    */

    this.languageService.changeLanguage(this.language);
    this.languageService.changeProjectsLanguage(this.language);
    this.languagesJSON$ = this.languageService.languageObservable;
    this.menu = false;
  }
}
