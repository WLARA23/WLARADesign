import { Component, Input, OnInit } from '@angular/core';

import languages from 'src/assets/json/languages.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  languagesJSON: any = languages;
  @Input() languagePosition = 0;

  ngOnInit(): void {
  }

}
