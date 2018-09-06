import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-table',
  template: `

    <div *ngIf="isLoading" class="progress mt-5">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%"></div>
    </div>

    <div *ngIf="!isLoading">
      <div *ngFor="let item of data" class="card">
        <div class="card-header">{{item.name}}</div>
        <div class="card-body">
          <h5 class="card-title">{{item.weather[0].main}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{item.weather[0].description}}</h6>
          <img [src]="'https://openweathermap.org/img/w/' + item.weather[0].icon + '.png'" />
          <h6>Temperature: {{item.main.temp}}°C</h6>
          <h6>Humidity: {{item.main.humidity}}%</h6>
          <p class="card-text">
              {{item.data}}
          </p>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class WeatherTableComponent implements OnChanges, OnInit {
  data = [];
  isLoading = false;

  private weatherData = [];
  private MAX_RESULTS_NUM = 50;
  private OPTIMAL_HUMIDITY = 50;

  @Input() optimalTemperature: number;

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.optimalTemperature.isFirstChange()) {
      this.updateData();
    }
  }

  constructor(private weatherService: WeatherService) { }

  updateData() {
    this.weatherData.sort((a, b) => {
      return Math.abs(a.main.temp - this.optimalTemperature) - Math.abs(b.main.temp - this.optimalTemperature);
    });
    this.data = this.weatherData
      .slice(0, this.MAX_RESULTS_NUM)
      .sort((a, b) => {
        return Math.abs(a.main.humidity - this.OPTIMAL_HUMIDITY) - Math.abs(b.main.humidity - this.OPTIMAL_HUMIDITY);
      })
      .map(_ => ({ ..._, data: JSON.stringify(_)}));
  }

  ngOnInit() {
    this.isLoading = true;
    this.weatherService.getData().subscribe(data => {
      this.weatherData = data.list;
      this.updateData();
      this.isLoading = false;
    });
  }

}
