import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from '../router.animations';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  existingUser;
  errorExists;

  constructor(
    private translate: TranslateService,
    public router: Router,
    private user: UserService
    ) {
    this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

    this.existingUser = {
      email: '',
      password: ''
    };

    this.errorExists = false;
  }

  ngOnInit() {}

  // onLoggedin() {
  //     localStorage.setItem('isLoggedin', 'true');
  // }

  loginUser = () => {
    this.user.loginUser(this.existingUser).subscribe(
      data => {
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', String(data.user_id));
        console.log(data);
        console.log(JSON.stringify(data.roles));
        localStorage.setItem('fullname', data.fullname );
        localStorage.setItem('listlastFeature', JSON.stringify(data.last_app_features));
        localStorage.setItem('roles', JSON.stringify(data.roles));
        if ( data.roles.length !== 0 ) {
          localStorage.setItem('role', data.roles[0].role_id);
        } else {
          localStorage.setItem('role', '0');
        }
        localStorage.setItem('aptId', String(data.apartment_id));
        localStorage.setItem('aptName', String(data.apartment_name));

        if ( localStorage.getItem('role') === '16' ) {
          this.router.navigate(['/m/home']);
          // return false;
        } else if ( localStorage.getItem('role') === '0' ) {
          this.router.navigate(['/signup/apply']);
        } else {
          this.router.navigate(['/s/menu']);
          // return false;
        }
      },
      error => {
        // console.log(error);
        this.errorExists = true;
      }
    );
  }
}
