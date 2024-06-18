import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <img [src]="imageUrl" />
    <button [attr.aria-label]="ariaLabel">Click me</button>
    <div [class.active]="isActive">class binding</div>
    <div [style.color]="color">style binding</div>
    <button (click)="toggleColor()">event binding</button>

    <input [(ngModel)]="name" />
    <p>Hello {{ name }}</p>
  `,
  styles: [
    `
      .active {
        color: red;
      }
    `,
  ],
})
export class AppComponent {
  title = 'binding';
  ariaLabel = 'Submit';
  isActive = true;
  color = 'blue';
  imageUrl = 'https://example.com/image.jpg';
  name = 'soham';

  toggleColor() {
    this.isActive = !this.isActive;
    this.color = this.isActive ? 'red' : 'blue';
  }
}
