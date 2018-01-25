import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import { AppComponent } from './app.component';
import {MatButtonModule, MatButton} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
