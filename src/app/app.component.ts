import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1 class="text-center">
        Welcome to {{title}}!
      </h1>

      <app-weather-table></app-weather-table>

    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'TheBestWeatherOnEarth';
}
