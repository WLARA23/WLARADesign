import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import doneProject from 'src/assets/json/projects.json';
import { Observable } from 'rxjs';
import { LanguageServiceService } from 'src/app/services/language-service.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  //VARIABLES 
  Projects: any = this.getReverseProjects();
  languagesJSON$: Observable<any>;

  //CONSTRUCTOR
  constructor(languageService:LanguageServiceService, private projectsService:ProjectsService) { 
    this.languagesJSON$ = languageService.languageObservable;
  }

  ngOnInit(): void {
  }

  getReverseProjects(): any{
    let pivot = [];
    for (let i = doneProject.length - 1; i >= 0; i--) {
      pivot.push(doneProject[i]);
    }
    return pivot;
  }

  setProjectId(id:number):void{
    this.projectsService.idObservableData = id;
    this.scrollUp();
  }

  scrollUp():void{
    window.scroll(0, 0);
  }

}
