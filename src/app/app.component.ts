import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { LanguageServiceService } from './services/language-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WLARADesign';

  languagesJSON$: Observable<any>;
  language:string = "Español";

  home:boolean = true;
  skills:boolean = false;
  portfolio:boolean = false;
  about:boolean = false;
  contact:boolean = false;
  project:boolean = false;
  projectId:string = "";

  menu:boolean = false;

  screen:number = 0;

  constructor(private languageService:LanguageServiceService){
    this.languagesJSON$ = languageService.languageObservable;
  }

  ngOnInit(): void {
    this.screen = window.innerWidth;
  }

  @HostListener ("window:resize", []) onResize(){
    this.screen = window.innerWidth; 
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
  }

  openSkills():void {
    this.home = false;
    this.skills = true;
    this.portfolio = false;
    this.about = false;
    this.contact = false;
    this.project = false;

    this.menu = false;
  }

  openPortfolio():void {
    this.home = false;
    this.skills = false;
    this.portfolio = true;
    this.about = false;
    this.contact = false;
    this.project = false;

    this.menu = false;
  }

  openPortfolioHome(bool: boolean):void {
    if(bool){
      this.openPortfolio();
      window.scroll(0, 0);
    }    
  }

  openAbout():void {
    this.home = false;
    this.skills = false;
    this.portfolio = false;
    this.about = true;
    this.contact = false;
    this.project = false;

    this.menu = false;
  }

  openContact():void {
    this.home = false;
    this.skills = false;
    this.portfolio = false;
    this.about = false;
    this.contact = true;
    this.project = false;

    this.menu = false;
  }

  openProject():void {
    this.home = false;
    this.skills = false;
    this.portfolio = false;
    this.about = false;
    this.contact = false;
    this.project = true;

    this.menu = false;
  }

  changeLanguage():void{
    let languageElement = document.getElementById("language");
    if(languageElement?.textContent == "Español"){
      this.language = "English";
      languageElement.innerHTML = this.language;
    }else if(languageElement?.textContent == "English"){
      this.language = "Español";
      languageElement.innerHTML = this.language;
    }
    this.languageService.changeLanguage(this.language);
    this.languagesJSON$ = this.languageService.languageObservable;
  }

  openProjectHome(bool: boolean):void {
    if(bool){
      this.openProject();
      window.scroll(0, 0);
    }    
  }

  openProjectPortfolio(bool: boolean):void {
    if(bool){
      this.openProject();
      window.scroll(0, 0);
    }    
  }

  projectNumber(id: string):void {
    this.projectId = id;
    window.scroll(0, 0); 
  }
}
