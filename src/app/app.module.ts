import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MzInputModule,
  MzDatepickerModule,
  MzRadioButtonModule,
  MzButtonModule,
  MzSelectModule,
  MzCollapsibleModule,
  MzTextareaModule,
  MzNavbarModule,
  MzCollectionModule,
} from 'ngx-materialize';
import { MaterialDesingComponent } from './Aula/material-design.component';
import { pessoaListComponent } from './pessoaListComponnent';


@NgModule({
  declarations: [
    AppComponent,
    MaterialDesingComponent,
    pessoaListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzTextareaModule,
    MzNavbarModule,
    MzInputModule,
    MzCollectionModule,
    MzDatepickerModule,
    MzRadioButtonModule,
    MzSelectModule,
    MzCollapsibleModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
