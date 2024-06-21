import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-testing
      [childMessage]="message"
      (MsgToParent)="receiveMessage($event)"
    ></app-testing> -->

    <app-test2
      [messageToChild]="message"
      (parentToChild)="receiveMsg($event)"
    ></app-test2>
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  message = 'hello this is message from parent to child';

  receiveMsg(message: string) {
    this.message = message;
  }
  // receiveMessage(message: string) {
  //   this.message = message;
  // }
}
