import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()],
    providers: [UserService]
})
export class SignupComponent implements OnInit {


    newUser;


    constructor(private translate: TranslateService,  private user: UserService) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.newUser = {
            id: -1,
            username: '',
            email: '',
            password: '',
            cPassword: '',
            phonenumber: '',
        };


    }

    ngOnInit() {}


    createUser = () => {
        this.user.createUser(this.newUser).subscribe(
            data => {
                // idk what to put here
            },
            error => {
                // Make error show up on screen
                console.log(error);
            }
        );
    }

}
