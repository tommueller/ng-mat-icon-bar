import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgMatIconBarModule } from './ng-mat-icon-bar/ng-mat-icon-bar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    NgMatIconBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
