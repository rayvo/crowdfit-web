import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../services/user.service';
import { FormControl, Validators, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { RepeatPasswordEStateMatcher, PasswordValidation, RepeatPasswordValidator } from './signup.validators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()],
    providers: [UserService, ErrorStateMatcher]
})

export class SignupComponent implements OnInit {

    constructor(
        private translate: TranslateService,
        private user: UserService,
        private router: Router,
        ) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.newUser = this.createFormGroup();
        /*{
            id: -1,
            username: '',
            email: '',
            password: '',
            cPassword: '',
            phonenumber: '',
        };*/
    }

    newUser: FormGroup;
    passwordMatcher = new RepeatPasswordEStateMatcher;


    ngOnInit() {}

    createFormGroup() {
        return new FormGroup({
            // id: new FormControl(-1),
            username: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', PasswordValidation),
            cpassword: new FormControl(''),
            phone: new FormControl(''),
            phoneverificationnumber: new FormControl(''),

        }, { validators: RepeatPasswordValidator });
    }
    revert() {
        this.newUser.reset();
    }

    onSubmit() {
    // ...
    }

    get id() {
        return this.newUser.get('id');
    }
    get username() {
        return this.newUser.get('username');
    }
    get email() {
        return this.newUser.get('email');
    }
    get password() {
        return this.newUser.get('password');
    }
    get cpassword() {
        return this.newUser.get('cpassword');
    }
    get phone() {
        return this.newUser.get('phone');
    }

    // getErrorMessage() {
    //   return this.newUser.get.hasError('required') ? 'You must enter a value' :
    //       this.email.hasError('email') ? 'Not a valid email' :
    //           '';
    // }
    getUsernameErrorMessage() {
        return this.username.hasError('required') ? 'You must enter a username' : '';
    }
    getEmailErrorMessage() {
        return this.email.hasError('required') ? 'You must enter an email' :
            this.email.hasError('email') ? 'You must enter a valid email address' : '';
    }
    getPasswordErrorMessage() {
        return this.password.hasError('required') ? 'You must enter a password' : '';
            // this.email.hasError('invalidEmail') ? 'You must enter a valid email address' : '';
    }
    // getCpasswordErrorMessage() {
    //     if ( this.cpassword.hasError('required') ) {
    //         return 'You must enter your password again';
    //     } else if ( this.password !== this.cpassword ) {
    //         return 'Passwords do not match';
    //     } else {
    //         return '';
    //     }
    // }



    createUser = () => {
        this.user.createUser(this.newUser).subscribe(
            data => {
                const toLoginUser = {
                    email: this.newUser.value.email,
                    password: this.newUser.value.password
                };
                console.log(toLoginUser);
                this.user.login(toLoginUser).subscribe(
                    data2 => {
                        localStorage.setItem('isLoggedin', 'true');
                        localStorage.setItem('token', data2.token);
                    },
                    error => {
                        console.log(error);
                    }
                );
                this.router.navigate(['/signup/welcome']);
            },
            error => {
                console.log('error \n' );
                console.log(error);
            }
        );
    }


}

