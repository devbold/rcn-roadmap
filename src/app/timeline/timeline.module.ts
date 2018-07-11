// App Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// App Component
import { TimelineComponent } from './timeline.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TimelineComponent,
  ],
  declarations: [TimelineComponent]
})
export class TimelineModule { }