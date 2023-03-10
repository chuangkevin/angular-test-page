import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExhibitionModule } from './Exhibition/data.module';
import { ExhibitionService } from './Exhibition/data.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ExhibitionModule
  ],
  providers: [ExhibitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
