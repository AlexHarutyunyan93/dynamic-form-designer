import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FormArrayServices, FormSchema} from '../shared/formArray.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'dynamic-form-builder',
  templateUrl: './dynamic-form-builder.component.html',
  styleUrls: ['./dynamic-form-builder.component.css']
})

export class DynamicFormBuilderComponent implements OnInit {
  form: FormSchema;
  public focusedField = [];
  public focusedIndex: number;
  formId: string;
  constructor(private formServices: FormArrayServices, private readonly activatedRoute: ActivatedRoute) {
    this.formId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.form = this.formServices.getForm(this.formId);
  }

  saveChanges() {
    this.formServices.$formsArray.next(this.formServices.formsArray);
  }
  addField(): void{
    this.formServices.addField(this.formId);
    this.focusedField.push(false);
  }
  removeField(index: number): void{
    this.form.fields.splice(index, 1);
    this.focusedField.splice(index, 1);
    this.formServices.$formsArray.next(this.formServices.formsArray);
  }
  copyField(index: number): void{
    const copy = JSON.parse(JSON.stringify(this.form.fields[index]));
    this.form.fields = [
      ...this.form.fields.slice(0, index),
      copy,
      ...this.form.fields.slice(index, this.form.fields.length)
    ];
    this.formServices.$formsArray.next(this.formServices.formsArray);
  }

  focused(index: number): void{
    this.focusedIndex = index;
  }

  onDrop(event: CdkDragDrop<any[]>): void{
    moveItemInArray(this.form.fields, event.previousIndex, event.currentIndex);
    this.formServices.formsArray.find(e => e.id === this.formId).fields = this.form.fields;
    this.focused(event.currentIndex);
    this.formServices.$formsArray.next(this.formServices.formsArray);
  }

  required(index: number, q): void{
   this.form.fields[index].required = q.checked;
   this.formServices.$formsArray.next(this.formServices.formsArray);
  }
}


