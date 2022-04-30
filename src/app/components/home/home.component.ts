import { Component, EventEmitter, OnInit, Output} from '@angular/core';

import doneProject from 'src/assets/json/projects.json';
import { Observable } from 'rxjs';
import { LanguageServiceService } from 'src/app/services/language-service.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //VARIABLES 
  Projects: any = doneProject;

  languagesJSON$: Observable<any>;

  //CONSTRUCTOR
  constructor(languageService:LanguageServiceService, private projectsService:ProjectsService) { 
    this.languagesJSON$ = languageService.languageObservable;
  }

  ngOnInit(): void {
  }

  setProjectId(id:number):void{
    this.projectsService.idObservableData = id;
    this.scrollUp();
  }

  scrollUp():void{
    window.scroll(0, 0);
  }

}
