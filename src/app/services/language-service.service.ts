import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import EN from 'src/assets/i18n/en.json';
import ES from 'src/assets/i18n/es.json';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  esJSON = ES;
  enJSON = EN;
  languageJSON: any = this.esJSON;

  private languageObservablePrivate: BehaviorSubject<any> = new BehaviorSubject<any>(this.languageJSON);

  constructor() {
  }

  changeLanguage(name:any){
    if(name == this.esJSON.name){
      this.languageJSON = this.esJSON;
    }else if(name == this.enJSON.name){
      this.languageJSON = this.enJSON;
    }
    this.languageObservablePrivate.next(this.languageJSON);
  }

  get languageObservable(){
    return this.languageObservablePrivate.asObservable();
  }
}
