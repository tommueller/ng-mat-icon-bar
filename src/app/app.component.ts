import { Component } from '@angular/core';

import { Translation } from './ng-mat-icon-bar/translation-model/translation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  translation: Translation = {
    title: 'Confirm?!',
    body: 'Are you sure?!',
    confirm: 'Yes',
    cancel: 'No'
  };
}
