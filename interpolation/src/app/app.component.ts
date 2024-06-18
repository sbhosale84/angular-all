import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>
    the sum of 10 and 5 is {{ getSum(5, 10) }} and subtraction is
    {{ getSub(10, 5) }}
    <p>The price is {{ price | currency : 'INR' }}</p>
    <p>Today the day is {{ today | date : 'fullDate' }}</p>
    <p>this is uppercase {{ text | uppercase }}</p>
    <p>this is lowercase {{ text | lowercase }}</p>
    <p>The value is {{ value | number : '1.2-2' }}</p>
  </h1> `,
  styles: [``],
})
export class AppComponent {
  title = 'interpolation';

  getSum(a: number, b: number): number {
    return a + b;
  }
  getSub(a: number, b: number): number {
    return a - b;
  }
  price = 123.34;
  value = 1234.5678;
  today = Date.now();
  text = 'hello Soham';
}
