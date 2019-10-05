import {Component, Input, OnInit} from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'radio',
  template: `    
        <mat-radio-group>
          <div [formGroup]="form" class="form-fields-options-bar">
            <mat-radio-button class="form-check-input" 
                              *ngFor="let opt of options" [value]="opt">
              {{opt}}
            </mat-radio-button>
          </div>
        </mat-radio-group>
    `
})
export class RadioComponent implements OnInit{
  @Input() field:any = {};
  @Input() form: FormGroup;
  public options: Array<string>;

  ngOnInit(): void {
    this.options = [];
    for(let key in this.field.options){
      this.options.push(this.field.options[key])
    }
  }
}
