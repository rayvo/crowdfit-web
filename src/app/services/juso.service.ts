import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class JusoService {

  constructor( private http: HttpClient, ) { }

  serverUrl = 'http://192.168.1.6:8000';
  jusoApiUrl = 'http://www.juso.go.kr/addrlink/addrLinkApi.do';
  myConfmKey = 'U01TX0FVVEgyMDE5MDMyNTE2NDExNTEwODYwMTQ=';
  myResultType = 'json';

  getJusos(jusoKeyword): Observable <any> {
    return this.http.get(this.jusoApiUrl + '?' +
    'confmKey=' + this.myConfmKey + '&' +
    'resultType=' + this.myResultType + '&' +
    'keyword=' + jusoKeyword
    );
  }

  // getCountries
  getCountriesAndCities(): Observable <any> {
    return this.http.get(this.serverUrl + '/api/country/', httpOptions );
  }

  createCity(cityName): Observable <any> {
    const body = {
      country: 1, // S.Korea is 1
      city: cityName
    };
    return this.http.post(this.serverUrl + '/api/city/', body, httpOptions );
  }


}
