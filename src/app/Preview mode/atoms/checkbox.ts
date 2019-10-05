import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'checkbox',
  template: `
    <div [formGroup]="form">
      <div [formGroupName]="field.label" class="form-fields-options-bar">
        <mat-checkbox *ngFor="let option of options; let i = index"
                      class="example-margin" >
          {{option}}
        </mat-checkbox>
      </div>
    </div>
  `
})
export class CheckBoxComponent implements OnInit {
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
