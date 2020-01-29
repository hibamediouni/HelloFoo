import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentsLibraryModule } from 'custom_lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
