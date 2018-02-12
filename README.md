# NgMatIconBar

The component creates an icon-bar which expands a list of Material icons on click. See the demo for the effect:
![NgMatSearchBar demo](https://raw.githubusercontent.com/tommueller/ng-mat-icon-bar/master/docs/demo.gif)

## Installation

Install the dependency via npm:

```bash
npm install ng-mat-icon-bar --save
```

or yarn

```bash
yarn add ng-mat-icon-bar
```

and import the module into your apps _app.module.ts_ like this:

```typescript
import { NgMatIconBarModule } from 'ng-mat-icon-bar';

...

@NgModule({
  ...,
  imports: [
    ...,
    NgMatIconBarModule
  ],
  ...
})
```

and you also need to add Material Icons webfont by adding

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

to your _index.html_.

## Usage

You can use the component with its selector:

```angular
<mat-icon-bar>
    // add your icons in here like this:
    <mat-icon (click)="doSomething()">icon</mat-icon>
</mat-icon-bar>
```

The component has two event outputs:

- *onOpen*: triggered when bar is shown
- *onClose*: triggered when bar is closed

## Contributions

Please don't hesitate to file an issue or send in a PR if you have any improvements or found bugs.