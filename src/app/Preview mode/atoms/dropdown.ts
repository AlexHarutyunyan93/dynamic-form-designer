import {Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dropdown',
  template: `
    <div [formGroup]="form">
      <mat-select [formControlName]="field.label" >
        <mat-option *ngFor="let opt of options" [value]="opt">{{opt}}</mat-option>
      </mat-select>
    </div>
    `
})
export class DropDownComponent implements OnInit{
  @Input() field:any = {};
  @Input() form:FormGroup;
  public options: Array<string>;

  ngOnInit(): void {
    this.options = [];
    for(let key in this.field.options){
      this.options.push(this.field.options[key])
    }
  }
}
