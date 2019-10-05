import { Component, Input, OnInit } from '@angular/core';
import { getFieldConfig } from '../configs/fields.config';
import {FormArrayServices} from '../../shared/formArray.service';

@Component({
  selector: 'field-builder',
  templateUrl: './field-builder.component.html',
  styleUrls: ['./field-builder.component.css']
})
export class FieldBuilderComponent implements OnInit{
  @Input() field;
  @Input() eLength: number;
  @Input() focused;
  public options: Array<number>;
  public fieldTypes: any;

  constructor(private formServices: FormArrayServices) {
    this.fieldTypes = getFieldConfig();
  }
  ngOnInit(){
    if(this.field.options){
      this.options = [];
      for(let option in this.field.options){
        this.options.push(Number(option))
      }
    }
  }
  changeFieldType(type) {
    this.field.type = type;
    if( 6 > this.field.type && this.field.type > 1  ) {
      if( !this.field.options ) {
        this.field.options = {};
        this.field.options[0] = 'Option';
        this.options = [0];
      }
    } else if(this.field.options){
      delete this.field.options
    }
    if(type === 5) {
      this.field.onUpload = this.field.onUpload.bind(this);
    }
    this.formServices.$formsArray.next(this.formServices.formsArray);
  }
  addOption() {
    this.field.options[Object.keys(this.field.options).length] = 'Option';
    this.someConfig();
    this.formServices.$formsArray.next(this.formServices.formsArray);
  }
  removeOption(index) {
    delete this.field.options[index];
    this.someConfig();
    this.formServices.$formsArray.next(this.formServices.formsArray);
  }
  someConfig(){
    let obj = {};
    let arr = [];
    let i = 0;
    for(let option in this.field.options){
      arr.push(i);
      obj[i] = this.field.options[option];
      ++i;
    }
    this.field.options = obj;
    this.options = arr;
  }
  saveChanges() {
    this.formServices.$formsArray.next(this.formServices.formsArray);
  }
}
