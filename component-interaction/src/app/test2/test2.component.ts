import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  template: `{{ messageToChild }}
    <button (click)="sendToParent()">send to</button> `,
  styleUrl: './test2.component.css',
})
export class Test2Component {
  @Input() messageToChild: string = '';
  @Output() parentToChild = new EventEmitter<string>();

  sendToParent() {
    this.parentToChild.emit('Hello from child');
  }
}
