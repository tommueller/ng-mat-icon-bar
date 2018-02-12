import { animate, state, style, transition, trigger, query, stagger , keyframes} from '@angular/animations';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

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
          style({opacity: 1, width: '*', offset: 0}),
          style({opacity: 0, width: '*', offset: 1}),
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
  @Output() onOpen = new EventEmitter<void>();
  @Output() onClose = new EventEmitter<void>();

  barVisible: boolean;

  constructor() { }

  ngOnInit() {
  }

  public open(): void {
    this.barVisible = true;
    this.onOpen.emit();
  }

  public close(): void {
    this.barVisible = false;
    this.onClose.emit();
  }

}
