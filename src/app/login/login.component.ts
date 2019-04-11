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
        localStorage.setItem('fullname', data.fullname );
        localStorage.setItem('listlastFeature', JSON.stringify(data.last_app_features));
        localStorage.setItem('listurs', JSON.stringify(data.userrolestatus));
        localStorage.setItem('aptId', String(data.apartment_id));
        localStorage.setItem('aptName', String(data.apartment_name));
        // TODO
        // Set proper navigations depending on type of user
        this.router.navigate(['/menu/danji']);
      },
      error => {
        // console.log(error);
        this.errorExists = true;
      }
    );
  }
}
