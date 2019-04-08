import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../services/user.service';
import { FormControl, Validators, FormGroup, FormGroupDirective, NgForm, AbstractControl } from '@angular/forms';
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
        ) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.newUser = this.createFormGroup();
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
            vNum: new FormControl('111111'),
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
    get cVNum() {
        return this.newUser.get('cVNum');
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
    getPhoneErrorMessage() {
        return this.phone.hasError('required') ? 'You must enter a phone number' : '';
    }
    // getVNumErrorMessage() {
    //     return this.vNum.hasError('required') ? 'You must enter a verication number' :
    //         this.vNum.hasError('incorrect') ? 'The number you entered is incorrect' : '';
    // }





    // TODO Check if working
    sendVerification() {
        this.newUser.get('vNum').setValue(String(Math.floor((Math.random() * 500000) + 499999)));
        const phon = this.newUser.get('phone').value;
        const dest = phon + '|' + this.newUser.get('username').value;
        console.log(this.newUser.get('vNum').value);
        this.phoneV.sendMessage( phon, dest, this.newUser.get('vNum').value ).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );

    }

    createUser = () => {
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
                this.user.loginUser(toLoginUser).subscribe(
                    data2 => {
                        localStorage.setItem('isLoggedin', 'true');
                        localStorage.setItem('token', data2.token);
                        localStorage.setItem('id', String(data2.id));
                        // double check names for below
                        localStorage.setItem('listlastFeature', JSON.stringify(data2.last_app_features));
                        localStorage.setItem('listurs', JSON.stringify(data2.userrolestatus));
                        localStorage.setItem('listapts', JSON.stringify(data2.associatedApt));
                    },
                    error => {
                        console.log(error);
                    }
                );
                this.router.navigate(['/signup/apply']);
            },
            error => {
                console.log(error);
            }
        );
    }


}

// export function MatchPasswords( c: AbstractControl ): {[key: string]: any}  {
//     return (group: FormGroup) => {
//         const control = c.get('password');
//         const test = c.get('cpassword');
//         if ( test.errors && !test.errors.match ) {
//             return;
//         }
//         if ( control.value !== test.value ) {
//             test.setErrors({ match: true });
//         } else {
//             test.setErrors(null);
//         }
//     };
// }

// function RepeatPasswordValidator(group: FormGroup) {
//     const password = group.get('password').value;
//     const cpassword = group.get('cpassword').value;
//     return password === cpassword ? null : { passwordsNotEqual: true };
// }

// function VerificationValidator(group: FormGroup) {
//     const verification = group.get('vNum').value;
//     const cverification = group.get('cVNum').value;
//     return verification === cverification ? null : { numsNotEqual: true };
// }
