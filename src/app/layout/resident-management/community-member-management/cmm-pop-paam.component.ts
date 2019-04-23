import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CommunityMemberManagementComponent } from './community-member-management.component';



@Component({
  selector: 'app-cmm-pop-paam',
  templateUrl: './cmm-pop-paam.component.html',
  styleUrls: ['./community-member-management.component.css'],
  providers: [ UserService ]
})
export class CMMPopPaamComponent {

    newUser: FormGroup;

    constructor(
        private dialogRef: MatDialogRef<CommunityMemberManagementComponent>,
        private user: UserService,
        // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
        this.newUser = this.createFormGroup();
    }

    createFormGroup() {
        return new FormGroup({
            fullname: new FormControl('', Validators.required),
            phone: new FormControl('', Validators.required),
            dong: new FormControl('', Validators.required),
            ho: new FormControl('', Validators.required),
            // typeOfPayement
        });
    }

    getLS(key) {
        return localStorage.getItem(key);
    }

    approveNewMember() {
        // this.user.createUserWithToken( this.newUser ).subscribe(
        //     data => {
        //         const myUserId = data.user_id;
        //         this.user.userRegister(
        //             Number(localStorage.getItem('aptId')),
        //             this.newUser.value.dong,
        //             this.newUser.value.ho,
        //             null // fileId
        //         ).subscribe(
        //             data2 => {
        //                 this.user.approveUser( myUserId ).subscribe(
        //                     data3 => {
        //                         const toReturn = {
        //                             id: myUserId,
        //                             name: this.newUser.value.name,
        //                             donghosu: this.newUser.value.dong + '동 ' + this.newUser.value.ho + '호',
        //                             phone: this.newUser.value.phone
        //                         };
        //                         return toReturn;

        //                     }, error3 => {console.log(error3); });
        //             }, error2 => {console.log(error2); });
        //     }, error => { console.log(error); });
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

    getUsernameErrorMessage() {
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
