// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// App Module
import { RoadmapModule } from '../roadmap/roadmap.module';
// App Component
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

// App Services
import { ServerService } from '../services/server.service';

// App Directives

@NgModule({
  imports: [
    CommonModule,
    RoadmapModule,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [ServerService],
  declarations: [HeaderComponent, HomeComponent]
})
export class CoreModule { }
