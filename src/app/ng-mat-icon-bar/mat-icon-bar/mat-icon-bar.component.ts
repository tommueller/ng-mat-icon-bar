import { animate, keyframes, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Translation } from '../translation-model/translation.model';

@Component({
  selector: 'mat-icon-bar',
  templateUrl: './mat-icon-bar.component.html',
  styleUrls: ['./mat-icon-bar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('*', style({ width: 0, opacity: 0 })),
      state('false', style({ width: 0, opacity: 0 })),
      state('true', style({ width: '*', opacity: 1 })),
      transition('true => *', [
        animate('200ms ease-in', keyframes([
          style({ opacity: 1, width: '*', offset: 0 }),
          style({ opacity: 0, width: '*', offset: 1 }),
        ])),
      ]),
      transition('* => true', [
        animate('0ms ease-out'),
        query('.mat-icon', style({ opacity: 0, transform: 'translateX(40px)' })),
        query('.mat-icon', stagger('-50ms', [
          animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),
      ])
    ])
  ]
})
export class MatIconBarComponent implements OnInit {

  @Input() mainIcon = 'settings';
  @Input() closeIcon = 'close';
  @Input() confirmClose = false;
  @Input() translation: Translation = {
    title: 'Confirm closing',
    body: 'Are you sure you want to close the menu?',
    confirm: 'OK',
    cancel: 'Cancel'
  };

  @Output() onOpen = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();

  barVisible: boolean;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  public open(): void {
    this.barVisible = true;
    this.onOpen.emit();
  }

  public close(): void {
    if (!this.confirmClose) {
      this.barVisible = false;
      this.onClose.emit();
      return;
    }

    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { translations: this.translation }
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.barVisible = false;
        this.onClose.emit();
      }
    });
  }

}
