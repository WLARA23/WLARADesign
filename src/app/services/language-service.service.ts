import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import EN from 'src/assets/i18n/en.json';
import ES from 'src/assets/i18n/es.json';
import proyectos from 'src/assets/i18n/proyectos.json';
import projects from 'src/assets/i18n/projects.json';

export interface Project{
  id: number;
  project_name: string;
  about:string;
  technologies: string;
  general_project_image: string;
  objective: string;
  date: string;
  client: string;
  main_role: string;
  sec_role: string;
  sketch: string;
  sketch_image: string;
  visual_identity_1: string;
  visual_identity_2: string;
  typography_image: string;
  colors_image: string;
  solution: string;
  solution_image: string;
  implementations_1: string;
  implementations_2: string;
  implementations_image: string;
  learning_1: string;
  learning_1_description: string;
  learning_2: string;
  learning_2_description: string;
  learning_3: string;
  learning_3_description: string;
}

export interface URLLanguage{
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  esJSON = ES;
  enJSON = EN;
  proyectosJSON = proyectos;
  projectsJSON = projects;
  languageJSON: any = this.enJSON;
  projectslanguageJSON: any = this.proyectosJSON;

  url: any = "en";

  private languageURLObservablePrivate: BehaviorSubject<any> = new BehaviorSubject<any>(this.url);

  private languageObservablePrivate: BehaviorSubject<any> = new BehaviorSubject<any>(this.languageJSON);
  private projectslanguageObservablePrivate: BehaviorSubject<any> = new BehaviorSubject<any>(this.projectslanguageJSON);

  constructor() {
  }

  //UI LANGUAGE
  changeLanguage(name:any){
    if(name == this.esJSON.name){
      this.languageJSON = this.esJSON;
      //this.languageURLObservablePrivate.next("es");
    }else if(name == this.enJSON.name){
      this.languageJSON = this.enJSON;
      //this.languageURLObservablePrivate.next("en");
    }
    this.languageObservablePrivate.next(this.languageJSON);
  }

  get languageObservable(){
    return this.languageObservablePrivate.asObservable();
  }

  //PROJECTS LANGUAGE
  changeProjectsLanguage(name:any){
    if(name == this.esJSON.name){
      this.projectslanguageJSON = this.proyectosJSON;
    }else if(name == this.enJSON.name){
      this.projectslanguageJSON = this.projectsJSON;
    }
    this.projectslanguageObservablePrivate.next(this.projectslanguageJSON);
  }

  get projectsLanguageObservable(){
    return this.projectslanguageObservablePrivate.asObservable();
  }

  set LanguageURLData(url:any){
    this.languageURLObservablePrivate.next(url);
  }

  get languageURLObservable(){
    return this.languageURLObservablePrivate.asObservable();
  }
}
