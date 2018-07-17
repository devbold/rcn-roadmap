// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Angular Material
import {
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    BrowserAnimationsModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    MatTooltipModule,
  ]
})
export class MaterialModule { }
