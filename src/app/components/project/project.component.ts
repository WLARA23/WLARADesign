import { Component, EventEmitter, OnInit, Input} from '@angular/core';

import doneProject from 'src/assets/json/projects.json';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  constructor() { }

  @Input() id = '';

  Projects: any = doneProject; 

  ngOnInit(): void {    
  }

}
