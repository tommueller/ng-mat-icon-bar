import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconBarComponent } from './mat-icon-bar/mat-icon-bar.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [
    MatIconBarComponent
  ],
  declarations: [
    MatIconBarComponent
  ]
})
export class NgMatIconBarModule { }
