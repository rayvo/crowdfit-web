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
    providers: [UserService],
})
export class LoginComponent implements OnInit {

    existingUser;


    constructor(
        private translate: TranslateService,
        public router: Router,
        private user: UserService,
        ) {
            this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
            this.translate.setDefaultLang('en');
            const browserLang = this.translate.getBrowserLang();
            this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.existingUser = {
            email: '',
            password: '',
        };
    }

    ngOnInit() {}

    // onLoggedin() {
    //     localStorage.setItem('isLoggedin', 'true');
    // }

    // WARNING: I (Haseung) copy pasted this code into signup.component.ts
    // If you make changes here make sure to put changes into signup.component.ts - createUser method as well
    // I know it's bad coding but it works for now.
    loginUser = () => {
        this.user.login(this.existingUser).subscribe(
            data => {
                localStorage.setItem('isLoggedin', 'true');
                localStorage.setItem('token', data.token);
                localStorage.setItem('id', String(data.id));
            },
            error => {
                console.log(error);
            }
        );
    }


}
