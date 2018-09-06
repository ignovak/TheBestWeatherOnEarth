import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    // https://openweathermap.org/current
    const url = 'https://api.openweathermap.org/data/2.5/box/city?bbox=85,-180,-85,185,10&appid=4ee3ac3ce2b2461555028c24473caa74';

    return this.http.get(url);
  }
}
