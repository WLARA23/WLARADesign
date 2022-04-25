import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import doneProject from 'src/assets/json/projects.json';
import languages from 'src/assets/json/languages.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  Projects: any = doneProject;

  @Output() portfolio = new EventEmitter<boolean>()
  @Output() project = new EventEmitter<boolean>()
  @Output() projectId = new EventEmitter<string>()

  languagesJSON: any = languages;
  @Input() languagePosition = 0;

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
