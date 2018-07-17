// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// App Module
import { MaterialModule } from '../material/material.module';
// App Component
import { RoadmapContainerComponent } from './roadmap-container/roadmap-container.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    RoadmapContainerComponent
  ],
  declarations: [RoadmapContainerComponent]
})
export class RoadmapModule { }