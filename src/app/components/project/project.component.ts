import { Component, OnInit,} from '@angular/core';

import doneProject from 'src/assets/json/projects.json';
import { Observable } from 'rxjs';
import { LanguageServiceService } from 'src/app/services/language-service.service';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  //VARIABLES 
  languagesJSON$: Observable<any>;

  id:any = 0;

  Projects: any = doneProject;

  //CONSTRUCTOR
  constructor(languageService:LanguageServiceService, private projectsService:ProjectsService) { 
    this.languagesJSON$ = languageService.languageObservable;
    this.id = projectsService.idObservable;
  }

  ngOnInit(): void {   

  }

  setProjectId(id:number):void{
    this.projectsService.idObservableData = id;
    this.id = this.projectsService.idObservable;
    this.scrollUp();
  }

  scrollUp():void{
    window.scroll(0, 0);
  }

}
