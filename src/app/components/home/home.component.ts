import { Component, EventEmitter, OnInit, Output} from '@angular/core';

import doneProject from 'src/assets/json/projects.json';
import { LanguageServiceService } from 'src/app/services/language-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //VARIABLES 
  Projects: any = doneProject;

  @Output() portfolio = new EventEmitter<boolean>()
  @Output() project = new EventEmitter<boolean>()
  @Output() projectId = new EventEmitter<string>()

  languagesJSON$: Observable<any>;

  //CONSTRUCTOR
  constructor(languageService:LanguageServiceService) { 
    this.languagesJSON$ = languageService.languageObservable;
  }

  ngOnInit(): void {
  }

  openPortfolioHome():void{
    this.portfolio.emit(true);
  }

  openProjectHome():void{
    this.project.emit(true);
  }

  projectNumber(id: string):void{
    this.projectId.emit(id);
  }

}
