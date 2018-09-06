import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-table',
  template: `
    <ngb-progressbar *ngIf="isLoading" type="info" [striped]="true">
    </ngb-progressbar>
    <table *ngIf="!isLoading" class="table">
      <tr *ngFor="let row of data">
        <td>{{row.id}}</td>
        <td>{{row.name}}</td>
        <td>{{row.coord.Lon + ' ' + row.coord.Lat}}</td>
        <td>{{row.main}}</td>
        <td>{{row.dt}}</td>
        <td>{{row.wind}}</td>
        <td>{{row.clouds}}</td>
        <td>{{row.rain}}</td>
        <td>{{row.snow}}</td>
        <td>{{row.weather}}</td>
      </tr>
    </table>
  `,
  styles: []
})
export class WeatherTableComponent implements OnInit {
  private data = [];
  private isLoading: false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.isLoading = true;
    this.weatherService.getData().subscribe(data => {
      this.data = data.list;
      this.isLoading = false;
    });
  }

}
