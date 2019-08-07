import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScenarioComponent5Component } from './scenario-component5/scenario-component5.component';
import { ScenarioChildComponent } from './scenario-child/scenario-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ScenarioComponent5Component,
    ScenarioChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
