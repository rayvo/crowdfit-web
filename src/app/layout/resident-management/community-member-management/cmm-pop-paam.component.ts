import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CommunityMemberManagementComponent } from './community-member-management.component';


export interface Res {
    value: number;
    viewValue: string;
}
export interface MyClasses {
    value: number;
    viewValue: string;
}

export interface MyTickets {
    value: number;
    viewValue: string;
}

@Component({
  selector: 'app-cmm-pop-paam',
  templateUrl: './cmm-pop-paam.component.html',
  styleUrls: ['./community-member-management.component.css'],
  providers: [ UserService ]
})
export class CMMPopPaamComponent {

    newTicket: FormGroup;
    residentList: Res[] = [];
    classList: MyClasses[] = [
        { value: 1, viewValue: 'Cycling' },
        { value: 2, viewValue: 'Zumba' },
        { value: 3, viewValue: 'Pilates' }
    ];
    ticketList: MyTickets[] = [
        { value: 1, viewValue: '30 Days' },
        { value: 2, viewValue: '60 Days' },
        { value: 3, viewValue: '90 Days' },
        { value: 6, viewValue: '180 Days' },
    ];

    selectedRes;
    selectedClass;
    selectedTicket;


    constructor(
        private dialogRef: MatDialogRef<CommunityMemberManagementComponent>,
        private user: UserService,
        // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
        this.newTicket = this.createFormGroup();
        this.getApprovedResidents();
    }

    createFormGroup() {
        return new FormGroup({
            resident: new FormControl('', Validators.required),
            aptClass: new FormControl('', Validators.required),
            ticketType: new FormControl('', Validators.required)
        });
    }

    getLS(key) {
        return localStorage.getItem(key);
    }

    getApprovedResidents() {
        // Get all approved Residents
        this.user.getUsersByStatus( localStorage.getItem('aptId'), 3).subscribe(
            data => {
                console.log(data);
                data.results.forEach(element => {
                    this.residentList.push({
                        value: element.user_id,
                        viewValue: element.fullname,
                    });
                });
            },
            error => {
                console.log(error);
            }
        );
    }

    createNewTicket() {
        console.log('#######################');
        console.log(this.newTicket.get('resident'));
        console.log(this.selectedRes);
        this.dialogRef.close();
        this.user.createAptClassTicket( this.selectedRes, this.selectedClass, this.selectedTicket ).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
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


    get resident() {
        return this.newTicket.get('resident');
    }
    get aptClass() {
        return this.newTicket.get('aptClass');
    }
    get ticketType() {
        return this.newTicket.get('ticketType');
    }

    getFullnameErrorMessage() {
        return this.resident.hasError('required') ? 'You must select a resident' : '';
    }
    getAptClassErrorMessage() {
        return this.aptClass.hasError('required') ? 'You must select a class' : '';
    }
    getTicketTypeErrorMessage() {
        return this.ticketType.hasError('required') ? 'You must select a ticket type' : '';
    }

}
