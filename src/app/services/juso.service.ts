import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class JusoService {

  constructor( private http: HttpClient, ) { }

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

}
