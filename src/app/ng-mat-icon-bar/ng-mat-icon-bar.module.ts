import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatRippleModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatIconBarComponent } from './mat-icon-bar/mat-icon-bar.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatRippleModule
  ],
  exports: [
    MatIconBarComponent
  ],
  declarations: [
    MatIconBarComponent,
    ConfirmationDialogComponent
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ]
})
export class NgMatIconBarModule { }
