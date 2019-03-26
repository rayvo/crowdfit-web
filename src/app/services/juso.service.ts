import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class JusoService {

  constructor( private http: HttpClient, ) { }

  serverUrl = 'http://www.juso.go.kr/addrlink/addrLinkApi.do';
  myConfmKey = 'U01TX0FVVEgyMDE5MDMyNTE2NDExNTEwODYwMTQ=';
  myResultType = 'json';

  searchJuso(jusoKeyword): Observable <any> {
    return this.http.get(this.serverUrl + '?' +
    'confmKey=' + this.myConfmKey + '&' +
    'resultType=' + this.myResultType + '&' +
    'keyword=' + jusoKeyword
    );
  }

}
