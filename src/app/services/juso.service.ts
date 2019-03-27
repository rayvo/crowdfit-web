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
  // Non-popup version
  jusoApiUrl1 = 'http://www.juso.go.kr/addrlink/addrLinkApi.do';
  myConfmKey1 = 'U01TX0FVVEgyMDE5MDMyNTE2NDExNTEwODYwMTQ=';
  myResultType1 = 'json';
  // Popup version
  jusoApiUrl2 = 'http://www.juso.go.kr/addrlink/addrLinkUrl.do';
  myConfmKey2 = 'U01TX0FVVEgyMDE5MDMyNzE0NTYxMDEwODYwODY=';
  myResultType2 = 4;


  getJusos(jusoKeyword): Observable <any> {
    return this.http.get(this.jusoApiUrl1 + '?' +
    'confmKey=' + this.myConfmKey1 + '&' +
    'resultType=' + this.myResultType1 + '&' +
    'keyword=' + jusoKeyword
    );
  }

  getJusosPopup(): Observable <any> {
    return this.http.get(this.jusoApiUrl2 + '?' +
    'confmKey=' + this.myConfmKey2 + '&' +
    'resultType=' + this.myResultType2
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
