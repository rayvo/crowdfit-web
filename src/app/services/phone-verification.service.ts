import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class PhoneVerificationService {

  constructor( private http: HttpClient, ) { }


  phoneApiUrl = 'https://apis.aligo.in/send/';
  phoneApiUrlMass = 'htps://apis.aligo.in/send_mass';

  KEY = 'ir3zj8kqg6blbnlkj4lnyquaymhzk5pt';
  USER_ID = 'crowdfit';
  SENDER = '0328340852';

  receiver = '';
  destination = '';
  msg = '';

  /*
	curl -X POST "https://apis.aligo.in/send/" \
R	--data-urlencode "key=xxxxx" \
R	--data-urlencode "user_id=xxxxx" \
R	--data-urlencode "sender=025114560" \
R	--data-urlencode "receiver=01111111111,01111111112" \
R	--data-urlencode "destination=01111111111|홍길동,01111111112|아무개" \
R	--data-urlencode "msg=%고객명%님! 안녕하세요. API TEST SEND" \
	--data-urlencode "title=API TEST 입니다" \
	--data-urlencode "rdate=20190329" \
	--data-urlencode "rtime=1719" \
	--data-urlencode "testmode_yn=Y" \
	--form image=@localfilename
  */

  sendMessage(myReceiver, myDestination, myMsg): Observable < any > {
    const body = {
      key: this.KEY,
      user_id: this.USER_ID,
      sender: this.SENDER,
      receiver: myReceiver,
      destination: myDestination,
      msg: myMsg
    };
    return this.http.post(this.phoneApiUrl , body, httpOptions );
  }


}
