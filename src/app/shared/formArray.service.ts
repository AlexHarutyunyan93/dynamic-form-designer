import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';

const initialState = {
  forms:  setLocalStorage(),
};

function setLocalStorage(){
  if(!JSON.parse(localStorage.getItem("forms"))) {
    localStorage.setItem("forms",JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem("forms"))
}

export class FormSchema {
  public id = (Math.random()).toString();
  public title = "New Form";
  public description = "";
  public fields = [];
}
export class FieldSchema {
  public label = '';
  public type = 0;
  public required = false;
}

@Injectable({
  providedIn: 'root'
})
export class FormArrayServices {
  public formsArray: Array<FormSchema>;
  public $formsArray: BehaviorSubject<Array<FormSchema>> = new BehaviorSubject([]);
  public formsArrayObs: Observable<Array<FormSchema>> = this.$formsArray.asObservable();
  constructor(private readonly router: Router) {
    this.formsArray = initialState.forms;
    this.formsArrayObs.subscribe((value) => {
      if(value.length) {
        localStorage.setItem('forms', JSON.stringify(value));
      }
    })
  }

  public addForm(): void {
    this.formsArray.push(new FormSchema());
    this.$formsArray.next(this.formsArray);
    this.router.navigateByUrl(`edit-form/${this.formsArray[this.formsArray.length-1].id}`);
  }
  public addField(id: string): void {
    let index = this.formsArray.findIndex(e => e.id === id);
    this.formsArray[index].fields.push(new FieldSchema());
    this.$formsArray.next(this.formsArray);
  }
  public removeForm(removeId: string): void {
    this.formsArray = this.formsArray.filter(e => e.id !== removeId);
    this.$formsArray.next(this.formsArray);
  }
  public getAllForms() {
    return this.formsArray
  }
  public getForm(id: string) {
    if (!this.formsArray.length) {
      // TODO redirect to 404 page
    }
    return this.formsArray.find(e => e.id === id)
  }
}
