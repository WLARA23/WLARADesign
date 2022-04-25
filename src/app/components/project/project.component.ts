import { Component, EventEmitter, OnInit, Input} from '@angular/core';

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

  ngOnInit(): void {   

  }

}
