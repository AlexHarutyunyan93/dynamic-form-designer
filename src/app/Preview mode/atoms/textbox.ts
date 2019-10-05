import {Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'textbox',
  template: `
    <mat-form-field [formGroup]="form">
        <input matInput *ngIf="field.type === 0" 
               [formControlName]="field.label" 
               placeholder="Answer" />
        <textarea matInput *ngIf="field.type === 1" 
                  [formControlName]="field.label" 
                  placeholder="Answer" ></textarea>
    </mat-form-field>
    `
})
export class TextBoxComponent implements OnInit{
  @Input() field: any;
  @Input() form:FormGroup;
  //get isValid() { return this.form.controls[this.field.name].valid; }
  //get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() {

  }
  ngOnInit(): void {
  }
}
