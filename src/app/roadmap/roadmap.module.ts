// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// App Component
import { RoadmapContainerComponent } from './roadmap-container/roadmap-container.component';
// App Services
// App Directives

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RoadmapContainerComponent
  ],
  declarations: [RoadmapContainerComponent]
})
export class RoadmapModule { }