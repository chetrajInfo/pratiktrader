import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersectionComponent } from './headersection/headersection.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FootersectionComponent } from './footersection/footersection.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersectionComponent,
    MainpageComponent,
    FootersectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
