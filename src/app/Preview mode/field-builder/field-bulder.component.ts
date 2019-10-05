import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'field-builder',
  template: `
  <div [formGroup]="form">
    <mat-label  [attr.for]="field.label">
      {{field.label}}
      <strong style="color: red" *ngIf="field.required">*</strong>
    </mat-label>
    <div [ngSwitch]="field.type" style="margin-bottom: 20px">
      <textbox *ngSwitchCase="0" [field]="field" [form]="form"></textbox>
      <textbox *ngSwitchCase="1" [field]="field" [form]="form"></textbox>
      <dropdown *ngSwitchCase="4" [field]="field" [form]="form"></dropdown>
      <checkbox *ngSwitchCase="3" [field]="field" [form]="form"></checkbox>
      <radio *ngSwitchCase="2" [field]="field" [form]="form"></radio>
<!--      <file *ngSwitchCase="5" [field]="field" [form]="form"></file>-->
      <date *ngSwitchCase="6" [field]="field" [form]="form"></date>
      
    </div>
  </div>
  `
})
export class FieldBuilderComponent implements OnInit {
  @Input() field:any;
  @Input() form:any;

  constructor() { }

  ngOnInit() {
  }

}
