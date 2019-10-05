import {Component, Input} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'date',
  template: `
      <div [formGroup]="form">
        <mat-form-field>
          <input matInput [matDatepicker]="myDatepicker">
          <mat-datepicker-toggle matSuffix [for]="myDatepicker"></mat-datepicker-toggle>
          <mat-datepicker #myDatepicker></mat-datepicker>
        </mat-form-field>
      </div> 
    `
})
export class DateComponent{
  @Input() field:any = {};
  @Input() form:FormGroup;
  public myDatepicker: string = new Date().toString();

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() {

  }
}
