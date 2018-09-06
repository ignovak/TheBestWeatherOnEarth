import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-table',
  template: `
    <table class="table">
      <tr *ngFor="let row of data">
        <td>{{row.id}}</td>
        <td>{{row.name}}</td>
        <td>{{row.coord.lon + ' ' + row.coord.lat}}</td>
        <td>{{row.main}}</td>
        <td>{{row.dt}}</td>
        <td>{{row.wind}}</td>
        <td>{{row.clouds}}</td>
        <td>{{row.weather}}</td>
      </tr>
    </table>
  `,
  styles: []
})
export class WeatherTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.data = [
      {"id":2208791,"name":"Yafran","coord":{"lon":12.52859,"lat":32.06329},"main":{"temp":9.68,"temp_min":9.681,"temp_max":9.681,"pressure":961.02,"sea_level":1036.82,"grnd_level":961.02,"humidity":85},"dt":1485784982,"wind":{"speed":3.96,"deg":356.5},"rain":{"3h":0.255},"clouds":{"all":88},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}]},
      {"id":2208425,"name":"Zuwarah","coord":{"lon":12.08199,"lat":32.931198},"main":{"temp":15.36,"temp_min":15.356,"temp_max":15.356,"pressure":1036.81,"sea_level":1037.79,"grnd_level":1036.81,"humidity":89},"dt":1485784982,"wind":{"speed":5.46,"deg":30.0002},"clouds":{"all":56},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}]},
      {"id":2212771,"name":"Sabratah","coord":{"lon":12.48845,"lat":32.79335},"main":{"temp":15.31,"temp_min":15.306,"temp_max":15.306,"pressure":1037.05,"sea_level":1037.55,"grnd_level":1037.05,"humidity":100},"dt":1485784982,"wind":{"speed":6.71,"deg":28.5002},"clouds":{"all":92},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}]},
      {"id":2217362,"name":"Gharyan","coord":{"lon":13.02028,"lat":32.172218},"main":{"temp":11.23,"temp_min":11.231,"temp_max":11.231,"pressure":1004.23,"sea_level":1037.06,"grnd_level":1004.23,"humidity":90},"dt":1485784982,"wind":{"speed":3.86,"deg":16.5002},"rain":{"3h":1.29},"clouds":{"all":92},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}]},
      {"id":2216885,"name":"Zawiya","coord":{"lon":12.72778,"lat":32.75222},"main":{"temp":17,"pressure":1024,"humidity":55,"temp_min":17,"temp_max":17},"dt":1485784982,"wind":{"speed":3.6,"deg":10},"clouds":{"all":40},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}]}
      ]
  }

}
