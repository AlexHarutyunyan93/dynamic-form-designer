import { Component, OnInit } from '@angular/core';
import {FormArrayServices, FormSchema} from '../shared/formArray.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public forms: Array<FormSchema>;
  constructor(private formServices: FormArrayServices) {}

  ngOnInit() {
    this.forms = this.formServices.getAllForms();
  }

  addForm(){
    this.formServices.addForm();
  }
  removeForm(index){
   this.formServices.removeForm(index);
   this.forms = this.formServices.getAllForms();
  }
}
