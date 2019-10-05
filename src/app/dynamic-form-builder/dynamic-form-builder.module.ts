import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from '../material/material.module';
import { MatTabsModule } from '@angular/material';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    MaterialModule,
    MatTabsModule,
    RouterModule,
  ],
  declarations: [
    DynamicFormBuilderComponent,
    FieldBuilderComponent,
  ],
  exports: [DynamicFormBuilderComponent],
  providers: []
})
export class DynamicFormBuilderModule { }
