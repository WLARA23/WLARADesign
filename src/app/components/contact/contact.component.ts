import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LanguageServiceService } from 'src/app/services/language-service.service';

import languages from 'src/assets/json/languages.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  //VARIABLES 
  languagesJSON$: Observable<any>;

  //CONSTRUCTOR
  constructor(languageService:LanguageServiceService) { 
    this.languagesJSON$ = languageService.languageObservable;
  }

  ngOnInit(): void {
  }

}
