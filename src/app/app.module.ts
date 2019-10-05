import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";

import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DynamicFormBuilderModule } from './dynamic-form-builder/dynamic-form-builder.module';
import { MainComponent } from './main/main.component';
import { FormBuilderModule } from './Preview mode/form-builder.module';
import { DynamicFormBuilderComponent } from './dynamic-form-builder/dynamic-form-builder.component';
import { FormBuilderComponent } from './Preview mode/form-builder.component';


const appRoutes: Routes = [
  {path: '', component: MainComponent},
  {path: 'edit-form/:id', component: DynamicFormBuilderComponent},
  {path: 'preview-form/:id', component: FormBuilderComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormBuilderModule,
    DynamicFormBuilderModule,
    FormBuilderModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
