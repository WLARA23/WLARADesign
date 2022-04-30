import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import doneProject from 'src/assets/json/projects.json';
import languages from 'src/assets/json/languages.json';
import { Observable } from 'rxjs';
import { LanguageServiceService } from 'src/app/services/language-service.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  //VARIABLES 
  Projects: any = doneProject;
  @Output() project = new EventEmitter<boolean>()
  @Output() projectId = new EventEmitter<string>()

  languagesJSON$: Observable<any>;

  //CONSTRUCTOR
  constructor(languageService:LanguageServiceService) { 
    this.languagesJSON$ = languageService.languageObservable;
  }

  ngOnInit(): void {
  }

  openProjectPortfolio():void{
    this.project.emit(true);
  }

  projectNumber(id: string):void{
    this.projectId.emit(id);
  }

}
