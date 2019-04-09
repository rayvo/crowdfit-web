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

  // For Haseung's local workspace ip 0.5
  // Non-popup version
  jusoApiUrl1 = 'http://www.juso.go.kr/addrlink/addrLinkApi.do';
  myConfmKey1 = 'U01TX0FVVEgyMDE5MDMyNTE2NDExNTEwODYwMTQ=';
  myResultType1 = 'json';
  // For Haseung's local workspace ip 0.5
  // Popup version
  jusoApiUrl2 = 'http://www.juso.go.kr/addrlink/addrLinkUrl.do';
  myConfmKey2 = 'U01TX0FVVEgyMDE5MDMyNzE0NTYxMDEwODYwODY=';
  myResultType2 = 4;

  // For Haseung's local workspace ip 0.154
  // With Coordinates Version
  jusoCoorUrl = 'http://www.juso.go.kr/addrlink/addrCoordApi.do';
  myConfmKey3 = 'U01TX0FVVEgyMDE5MDQwOTE0MzgyNzEwODYzNzI=';
  myResultType3 = 'json';


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

  getJusosCoor( addrInfo ): Observable <any> {
    return this.http.get(this.jusoCoorUrl + '?' +
    'confmKey=' + this.myConfmKey3 + '&' +
    'admCd=' + addrInfo.admCd + '&' +
    'rnMgtSn=' + addrInfo.rnMgtSn + '&' +
    'udrtYn=' + addrInfo.udrtYn + '&' +
    'buldMnnm=' + addrInfo.buldMnnm + '&' +
    'buldSlno=' + addrInfo.buldSlno + '&' +
    'resultType=' + this.myResultType3
    );
  }

}
