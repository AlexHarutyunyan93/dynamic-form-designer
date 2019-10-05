import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    Material.MatCardModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatMenuModule,
    Material.MatSlideToggleModule,
    Material.MatIconModule,
    Material.MatDividerModule,
    Material.MatButtonToggleModule
  ],
  exports: [
    Material.MatCardModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatDatepickerModule,
    Material.MatNativeDateModule,
    Material.MatButtonModule,
    Material.MatMenuModule,
    Material.MatSlideToggleModule,
    Material.MatIconModule,
    Material.MatDividerModule,
  ],
  declarations: []
})
export class MaterialModule { }
