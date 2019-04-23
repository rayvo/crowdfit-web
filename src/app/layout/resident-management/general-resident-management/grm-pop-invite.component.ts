import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GeneralResidentManagementComponent } from './general-resident-management.component';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DialogData } from '../../staff-management/sm-popup.component';



@Component({
  selector: 'app-grm-pop-invite',
  templateUrl: './grm-pop-invite.component.html',
  styleUrls: ['./general-resident-management.component.css'],
  providers: [ UserService ]
})
export class GRMPopInviteComponent {

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
            fullname: new FormControl('', [Validators.required]),
            phone: new FormControl('', [Validators.required]),
            dong: new FormControl('', Validators.required),
            ho: new FormControl('', Validators.required),

        });
    }

    getLS(key) {
        return localStorage.getItem(key);
    }

    // approveNewUser() {
    //     this.user.createUserWithToken( this.newUser ).subscribe(
    //         data => {
    //             const myUserId = data.user_id;
    //             this.user.userRegister(
    //                 Number(localStorage.getItem('aptId')),
    //                 this.newUser.value.dong,
    //                 this.newUser.value.ho,
    //                 null // fileId
    //             ).subscribe(
    //                 data2 => {
    //                     this.user.approveUser( myUserId ).subscribe(
    //                         data3 => {
    //                             const toReturn = {
    //                                 id: myUserId,
    //                                 name: this.newUser.value.name,
    //                                 donghosu: this.newUser.value.dong + '동 ' + this.newUser.value.ho + '호',
    //                                 phone: this.newUser.value.phone
    //                             };
    //                             return toReturn;

    //                         }, error3 => {console.log(error3); });
    //                 }, error2 => {console.log(error2); });
    //         }, error => { console.log(error); });
    // }

    invite() {
        // TODO
    }

    get fullname() {
        return this.newUser.get('fullname');
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

    getFullnameErrorMessage() {
        return this.fullname.hasError('required') ? 'You must enter a name' : '';
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
