import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1 class="text-center">
        Welcome to {{title}}!
      </h1>

      <div *ngFor="let entry of genderEntries" class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="gender"
          [id]="entry.id"
          [value]="entry.value"
          [checked]="entry.value == gender"
          (change)="onGenderChange(entry.value)"
        >
        <label class="form-check-label" [for]="entry.id">
          {{entry.label}}
        </label>
      </div>

      <app-weather-table [optimalTemperature]="optimalTemperature"></app-weather-table>

    </div>
  `,
  styles: []
})
export class AppComponent {
  genderEntries = [
    {
      value: 'male',
      id: 'genderRadioMale',
      label: 'I\'m a man (the ideal temperature is 21°C)'
    },
    {
      value: 'female',
      id: 'genderRadioFemale',
      label: 'I\'m a woman (the ideal temperature is 22°C)'
    }
  ];
  title = 'TheBestWeatherOnEarth';
  gender = 'male';
  optimalTemperature = 21;

  onGenderChange(gender) {
    this.gender = gender;
    this.optimalTemperature = {
      male: 21,
      female: 22
    }[gender];
  }
}
