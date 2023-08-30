import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // external CSS
  // styleUrls: ['./app.component.css']

  // Inline styles
  styles: [
    `
      h1 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {
  title = '01-basic';
}
