import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WLARADesign';

  home:boolean = true;
  skills:boolean = false;
  portfolio:boolean = false;
  about:boolean = false;
  contact:boolean = false;
  project:boolean = false;
  projectId:string = "";

  menu:boolean = false;

  screen:number = 0;

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

  openProjectHome(bool: boolean):void {
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
