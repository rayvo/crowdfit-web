import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GeneralResidentManagementComponent } from './general-resident-management.component';
import { FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-grm-pop-paau',
  templateUrl: './grm-pop-paau.component.html',
  styleUrls: ['./general-resident-management.component.css'],
  providers: [ UserService ]
})
export class GRMPopPaauComponent {

    newUser: FormGroup;

    constructor(
        private dialogRef: MatDialogRef<GeneralResidentManagementComponent>,
        private user: UserService,
        // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
        this.newUser = this.createFormGroup();
    }

    createFormGroup() {
        return new FormGroup({
            // id: new FormControl(-1),
            username: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
            phone: new FormControl('', [Validators.required]),
            dong: new FormControl('', Validators.required),
            ho: new FormControl('', Validators.required),
            // vNum: new FormControl('111111'),

        });
    }

    getLS(key) {
        return localStorage.getItem(key);
    }

    approveNewUser() {
        this.user.createUserWithToken( this.newUser ).subscribe(
            data => {
                console.log('data1');
                console.log(data);
                const myUserId = data.user_id;
                this.user.userRegisterByCEO(
                    data.token,
                    Number(localStorage.getItem('aptId')),
                    this.newUser.value.dong,
                    this.newUser.value.ho,
                    null // fileId
                ).subscribe(
                    data2 => {
                        console.log('data2');
                        console.log(data2);
                        this.user.approveUser( myUserId ).subscribe(
                            data3 => {
                                console.log('data3');
                                console.log(data3);
                                const toReturn = {
                                    id: myUserId,
                                    name: this.newUser.value.name,
                                    donghosu: this.newUser.value.dong + '동 ' + this.newUser.value.ho + '호',
                                    phone: this.newUser.value.phone
                                };
                                this.dialogRef.close( toReturn );

                            }, error3 => {
                                console.log(error3);
                                this.dialogRef.close();
                            });
                    }, error2 => {
                        console.log(error2);
                        this.dialogRef.close();
                    });
            }, error => {
                console.log(error);
                this.dialogRef.close();
            }
        );
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
    get phone() {
        return this.newUser.get('phone');
    }
    get dong() {
        return this.newUser.get('dong');
    }
    get ho() {
        return this.newUser.get('ho');
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
    getPhoneErrorMessage() {
        return this.phone.hasError('required') ? 'You must enter a phone number' : '';
    }
    getDongErrorMessage() {
        return this.dong.hasError('required') ? 'You must enter a apartment 동' : '';
    }
    getHoErrorMessage() {
        return this.ho.hasError('required') ? 'You must enter a apartment 호' : '';
    }

}
