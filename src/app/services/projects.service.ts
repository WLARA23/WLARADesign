import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  id:number = 0;

  private idObservablePrivate: BehaviorSubject<number> = new BehaviorSubject<number>(this.id);

  constructor() {
  }

  set idObservableData(id:number){
    this.idObservablePrivate.next(id);
  }

  get idObservable(){
    return this.idObservablePrivate.value;
  }
}
