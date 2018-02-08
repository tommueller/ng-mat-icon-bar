import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mat-icon-bar',
  templateUrl: './mat-icon-bar.component.html',
  styleUrls: ['./mat-icon-bar.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('*', style({ width: '0' })),
      state('false', style({ width: '0' })),
      state('true', style({ width: '*' })),
      transition('true => *', animate('300ms ease-in')),
      transition('* => true', animate('300ms ease-out'))
    ])
  ]
})
export class MatIconBarComponent implements OnInit {

  @Input() mainIcon = 'settings';
  barVisible: false;

  constructor() { }

  ngOnInit() {
  }

}
