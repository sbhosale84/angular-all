import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-testing
      [childMessage]="message"
      (MsgToParent)="receiveMessage($event)"
    ></app-testing>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  message = 'hello this is message from parent to child';

  receiveMessage(message: string) {
    this.message = message;
  }
}
