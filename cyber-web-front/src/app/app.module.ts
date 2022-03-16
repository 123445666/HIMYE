import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputDataFormComponent } from './input-data-form/input-data-form.component';
import { Routes, RouterModule } from "@angular/router";

import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: InputDataFormComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    InputDataFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
