import { Component, Input, OnInit } from '@angular/core';

import languages from 'src/assets/json/languages.json';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }
  
  languagesJSON: any = languages;
  @Input() languagePosition = 0;

  ngOnInit(): void {
  }

}
