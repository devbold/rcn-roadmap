// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// App Module
import { TimelineModule } from '../timeline/timeline.module';
// App Component
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// App Services
// App Directives

@NgModule({
  imports: [
    CommonModule,
    TimelineModule,
  ],
  exports: [
    HeaderComponent,
  ],
  declarations: [HeaderComponent, HomeComponent]
})
export class CoreModule { }
