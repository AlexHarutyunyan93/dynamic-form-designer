import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import {FormArrayServices, FormSchema} from '../shared/formArray.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
})

export class FormBuilderComponent implements OnInit {
  @Output() onSubmit = new EventEmitter();
  public form: FormGroup;
  public formState: FormSchema;
  public formId: string;
  constructor(private formServices: FormArrayServices,
              private fb: FormBuilder,
              private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.formId = this.activatedRoute.snapshot.params['id'];
    this.formState = this.formServices.getForm(this.formId);

    let fieldsCtrls = {};
    for (let f of this.formState.fields) {
      if (!f.options) {
        fieldsCtrls[f.label] = new FormControl('')
      } else {
        fieldsCtrls[f.label] = new FormControl(f.options)
      }
    }
    this.form = this.fb.group(fieldsCtrls);
   }
   submit(){
    console.log(this.form)
   }
}
