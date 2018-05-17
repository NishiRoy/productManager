import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingcomponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { ProductsService } from './products.service';


@NgModule({
  declarations: [
    AppComponent,
    routingcomponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
