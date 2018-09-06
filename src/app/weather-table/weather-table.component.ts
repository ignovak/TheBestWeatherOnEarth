import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-table',
  template: `
    <ngb-progressbar *ngIf="isLoading" type="info" [striped]="true">
    </ngb-progressbar>

    <div *ngIf="!isLoading">
      <div *ngFor="let item of data" class="card">
        <div class="card-header">{{item.name}}</div>
        <div class="card-body">
          <h5 class="card-title">{{item.weather[0].main}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{item.weather[0].description}}</h6>
          <img [src]="'https://openweathermap.org/img/w/' + item.weather[0].icon + '.png'" />
          <h6>Temperature: {{item.main.temp}}</h6>
          <h6>Humidity: {{item.main.humidity}}</h6>
          <p class="card-text">
              {{item.data}}
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class WeatherTableComponent implements OnInit {
  private data = [];
  private isLoading: false;
  private MAX_RESULTS_NUM = 20;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.isLoading = true;
    this.weatherService.getData().subscribe(data => {
      this.data = data.list.slice(0, this.MAX_RESULTS_NUM).map(_ => ({ ..._, data: JSON.stringify(_)}));
      this.isLoading = false;
    });
  }

}
