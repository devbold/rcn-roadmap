// App Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// App Component
import { TimelineComponent } from './timeline.component';
import { IndexCircleComponent } from './index-circle/index-circle.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { TitleComponent } from './title/title.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { IconBlockComponent } from './icon-block/icon-block.component';
import { MainTitleComponent } from './main-title/main-title.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TimelineComponent,
  ],
  declarations: [TimelineComponent, IndexCircleComponent, TimeLineComponent, TitleComponent, ParagraphComponent, IconBlockComponent, MainTitleComponent]
})
export class TimelineModule { }