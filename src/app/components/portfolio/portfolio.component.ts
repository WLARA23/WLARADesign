import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import doneProject from 'src/assets/json/projects.json';
import languages from 'src/assets/json/languages.json';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  Projects: any = doneProject;
  @Output() project = new EventEmitter<boolean>()
  @Output() projectId = new EventEmitter<string>()

  languagesJSON: any = languages;
  @Input() languagePosition = 0;

  ngOnInit(): void {
  }

  openProjectPortfolio():void{
    this.project.emit(true);
  }

  projectNumber(id: string):void{
    this.projectId.emit(id);
  }

}
