import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { APP_ROUTES } from './app.router';


import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './compartido/footer/footer.component';
import { Header2Component } from './compartido/header2/header2.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component';



import { PagesModule } from './pages/pages.module';
import { Quiz2Component } from './quiz2/quiz2.component';
import { Quiz3Component } from './quiz3/quiz3.component';
import { Quiz4Component } from './quiz4/quiz4.component';
import { Quiz5Component } from './quiz5/quiz5.component';
import { Quiz6Component } from './quiz6/quiz6.component';
import { Quiz7Component } from './quiz7/quiz7.component';
import { Quiz8Component } from './quiz8/quiz8.component';
import { Quiz9Component } from './quiz9/quiz9.component';
import { Quiz10Component } from './quiz10/quiz10.component';
import { Quiz11Component } from './quiz11/quiz11.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    Quiz2Component,
    Quiz3Component,
    Quiz4Component,
    Quiz5Component,
    Quiz6Component,
    Quiz7Component,
    Quiz8Component,
    Quiz9Component,
    Quiz10Component,
    Quiz11Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
