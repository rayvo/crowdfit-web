import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../services/user.service';
import { FormControl, Validators, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { RepeatPasswordEStateMatcher, PasswordValidation, RepeatPasswordValidator } from './signup.validators';
import { Router } from '@angular/router';
import { PhoneVerificationService } from '../services/phone-verification.service';

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
        private phoneV: PhoneVerificationService,
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
    verificationNum = -1;


    ngOnInit() {}

    createFormGroup() {
        return new FormGroup({
            // id: new FormControl(-1),
            username: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', PasswordValidation),
            cpassword: new FormControl(''),
            phone: new FormControl(''),
            vNum: new FormControl('', [Validators.required]),

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
    get vNum() {
        return this.newUser.get('vNum');
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

    // TODO Check if working
    sendVerification() {
        this.verificationNum = Math.floor((Math.random() * 500000) + 499999);
        const phon = this.newUser.get('phone').value;
        const dest = phon + '|' + this.newUser.get('username').value;
        console.log('############################');
        console.log(this.verificationNum);
        console.log(phon);
        console.log(dest);
        console.log('############################');
        this.phoneV.sendMessage( phon, dest, this.verificationNum ).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );

    }

    checkVerification() {
        if ( this.vNum.value === this.verificationNum ) {
            // make valid
        } else {
            return this.vNum.hasError('required') ? 'Could not verify' : '';
        }
    }

    createUser = () => {/*
        this.user.createUser(this.newUser).subscribe(
            // TODO create: createUserStatusNone
            data => {
                const toLoginUser = {
                    email: this.newUser.value.email,
                    password: this.newUser.value.password
                };
                // WARNING: I (Haseung) copy pasted this code from login.component.ts
                // If you make changes here make sure to put changes into login.component.ts - loginUser method as well
                // I know it's bad coding but it works for now.
                this.user.login(toLoginUser).subscribe(
                    data2 => {
                        localStorage.setItem('isLoggedin', 'true');
                        localStorage.setItem('token', data2.token);
                        localStorage.setItem('id', String(data2.id));
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
        );*/
    }


}

