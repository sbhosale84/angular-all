import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-testing',
  template: `
    <div>
      <p>{{ childMessage }}</p>
    </div>
    <button (click)="toParent()">click</button>
  `,
  styleUrl: './testing.component.css',
})
export class TestingComponent {
  @Output() MsgToParent = new EventEmitter<string>();
  @Input() childMessage: string = '';

  toParent() {
    this.MsgToParent.emit('Hello from child');
  }
}
