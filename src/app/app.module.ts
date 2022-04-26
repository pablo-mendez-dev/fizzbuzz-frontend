import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetFizzbuzzComponent } from './components/get-fizzbuzz/get-fizzbuzz.component';
import { GetAllOkFizzbuzzComponent } from './components/get-all-ok-fizzbuzz/get-all-ok-fizzbuzz.component';
import { GetAllErrorFizzbuzzComponent } from './components/get-all-error-fizzbuzz/get-all-error-fizzbuzz.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    GetFizzbuzzComponent,
    GetAllOkFizzbuzzComponent,
    GetAllErrorFizzbuzzComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
