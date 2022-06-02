import { Component, OnInit } from '@angular/core';
import { LanguageServiceService, URLLanguage } from 'src/app/services/language-service.service';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  languageURL: URLLanguage[] = [];

  constructor(languageService: LanguageServiceService) {    
    languageService.languageURLObservable.subscribe(url =>{
      this.languageURL = url;
    });
   }

  ngOnInit(): void {
  }

}
