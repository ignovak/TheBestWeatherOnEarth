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
    const host = 'https://api.openweathermap.org';
    const path = '/data/2.5/box/city';
    const bbox = '-180,-90,180,90,8'; // [lon-left,lat-bottom,lon-right,lat-top,zoom]
    const apiKey = '4ee3ac3ce2b2461555028c24473caa74';
    const url = host + path + '?bbox=' + bbox + '&appid=' + apiKey;
    return this.http.get(url);
  }
}
