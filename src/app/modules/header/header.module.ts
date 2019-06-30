import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { SearchComponent } from './components/search/search.component';
import {FormsModule} from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [HeaderComponent, SearchComponent, NavBarComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
