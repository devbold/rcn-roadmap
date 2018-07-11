// Angular Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App Component
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
  ],
  declarations: [HeaderComponent, HomeComponent]
})
export class CoreModule { }
