import { Component, EventEmitter, OnInit, Input, Output} from '@angular/core';

import doneProject from 'src/assets/json/projects.json';
import languages from 'src/assets/json/languages.json';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  @Input() id = '';
  languagesJSON: any = languages;
  @Input() languagePosition = 0;

  Projects: any = doneProject;

  @Output() portfolio = new EventEmitter<boolean>()
  @Output() project = new EventEmitter<boolean>()
  @Output() projectId = new EventEmitter<string>()

  ngOnInit(): void {   

  }

  openProjectHome():void{
    this.project.emit(true);
  }

  projectNumber(id: string):void{
    this.projectId.emit(id);
  }

  openPortfolioHome():void{
    this.portfolio.emit(true);
  }

}
