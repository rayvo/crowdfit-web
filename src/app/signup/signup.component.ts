import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../services/user.service';
import { FormControl, Validators, FormGroup, FormGroupDirective, NgForm, AbstractControl, FormBuilder } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { Router } from '@angular/router';
import { PhoneVerificationService } from '../services/phone-verification.service';
import {
    RepeatPasswordEStateMatcher,
    PasswordValidation,
    RepeatPasswordValidator,
    VNumEStateMatcher,
    VNumValidation,
    VNumValidator,
} from './signup.validators';

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
        private fb: FormBuilder
        ) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.newUser = this.fb.group( {
            // id: new FormControl(-1),
            username: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
            cpassword: new FormControl('', PasswordValidation),
            phone: new FormControl('', [Validators.required]),
            vNum: new FormControl('111111', []),
            cVNum: new FormControl('', VNumValidation),
        }, {
            validators: [RepeatPasswordValidator, VNumValidator]
        } );

    }

    newUser: FormGroup;
    passwordMatcher = new RepeatPasswordEStateMatcher;
    vNumMatcher = new VNumEStateMatcher;


    ngOnInit() {}

    createFormGroup() {
        return new FormGroup({
            // id: new FormControl(-1),
            username: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
            cpassword: new FormControl('', PasswordValidation),
            phone: new FormControl('', [Validators.required]),
            vNum: new FormControl('111111', []),
            cVNum: new FormControl('', VNumValidation),
        }, {
            validators: [RepeatPasswordValidator, VNumValidator]
        });
    }
    revert() {
        this.newUser.reset();
    }

    onSubmit() {
    // ...
    }

    // get id() {
    //     return this.newUser.get('id');
    // }
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
    get cVNum() {
        return this.newUser.get('cVNum');
    }


    getUsernameErrorMessage() {
        return this.username.hasError('required') ? 'You must enter a name' : '';
    }
    getEmailErrorMessage() {
        return this.email.hasError('required') ? 'You must enter an email' :
            this.email.hasError('email') ? 'You must enter a valid email address' : '';
    }
    getPasswordErrorMessage() {
        return this.password.hasError('required') ? 'You must enter a password' : '';
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
    getPhoneErrorMessage() {
        return this.phone.hasError('required') ? 'You must enter a phone number' : '';
    }
    // getVNumErrorMessage() {
    //     return this.vNum.hasError('required') ? 'You must enter a verication number' :
    //         this.vNum.hasError('incorrect') ? 'The number you entered is incorrect' : '';
    // }





    // TODO Check if working
    sendVerification() {
        console.log(this.newUser);
        this.newUser.get('vNum').setValue(String(Math.floor((Math.random() * 500000) + 499999)));
        const phon = this.newUser.get('phone').value;
        const dest = phon + '|' + this.newUser.get('username').value;

        // TODO
        // GET RID OF console.log WHEN DEPLOYING!
        console.log(this.newUser.get('vNum').value);
        // BELOW WORKS! Commented out to save money
        /*
        this.phoneV.sendMessage( phon, dest, this.newUser.get('vNum').value ).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
        */

    }

    createUser = () => {
        if ( this.newUser.valid ) {

            this.user.createUser(this.newUser).subscribe(
                // TODO create: createUserStatusNone
                data => {

                    localStorage.setItem('isLoggedin', 'true');
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('id', String(data.user_id));
                    localStorage.setItem('fullname', data.fullname );
                    localStorage.setItem('listlastFeature', JSON.stringify(data.last_app_features));
                    localStorage.setItem('listurs', JSON.stringify(data.userrolestatus));
                    localStorage.setItem('aptId', String(data.apartment_id));
                    localStorage.setItem('aptName', String(data.apartment_name));

                    this.router.navigate(['/signup/apply']);
                },
                error => {
                    console.log(error);
                }
            );
        }
    }


}
