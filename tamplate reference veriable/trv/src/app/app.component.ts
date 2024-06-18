import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
    <!-- tampalte refernce veirble  -->
    <h1>template reference variable</h1>
    <input #MyValue type="text" value="title" />
    <button (click)="clickMe(MyValue.value)">click</button>

    <h1>Tow way binding</h1>
    <input [(ngModel)]="title" type="text" value="title" />
    {{ title }}

    <h1>Structural Directive</h1>
    <div *ngIf="false; else elseBlock">Hello ngIf</div>
    <ng-template #elseBlock>
      <p>Else block</p>
    </ng-template>

    <div *ngSwitch="view">
      <p *ngSwitchCase="'map'">Map view</p>
      <p *ngSwitchCase="'list'">List view</p>
      <p *ngSwitchDefault>Default view</p>
    </div>

    <Button (click)="setView('map')">Map</Button>
    <Button (click)="setView('list')">List</Button>
    <Button (click)="setView('default')">Default</Button>
    {{ view }}

    <ul>
      <li *ngFor="let item of items; let i = index">{{ i + 1 }}. {{ item }}</li>
    </ul>

    <p [ngClass]="{'highlighted': isHighlighted}">This paragraph can be highlighted.</p>
    <button (click)="toggleHighlight()">Toggle Highlight</button>

  </div>`,

  styles: `
    .highlighted{
      background-color: yellow
    }
  `,
})
export class AppComponent {
  title = '';
  clickMe(MyValue: any) {
    console.log(MyValue);
  }
  view = 'default';
  setView(view: any) {
    this.view = view;
  }

  isHighlighted: boolean = false;

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }

  items = ['item 1', 'item 2', 'item 3', 'item 4'];


}
