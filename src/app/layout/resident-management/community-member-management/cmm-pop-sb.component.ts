import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommunityMemberManagementComponent } from './community-member-management.component';


export interface DialogData {
    userId: number;
    name: string;
    mac: string;
}

@Component({
    selector: 'app-cmm-pop-sb',
    templateUrl: './cmm-pop-sb.component.html',
    styleUrls: ['./community-member-management.component.css'],
    providers: [ UserService ]
})
export class CMMPopSBComponent {

    constructor(
        private user: UserService,
        private dialogRef: MatDialogRef<CommunityMemberManagementComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
        console.log('data is: ');
        console.log(data);
        this.setMacInfo();
    }

    hasMac;
    saveWasClicked = false;
    myMac = '';
    deviceType = 2;
    isActive = true;
    editable = false;


    setMacInfo() {
        console.log('setMacInfo Reached');
        this.user.getUserDeviceByUser(this.data.userId).subscribe(
            info => {
                console.log(info);
                console.log(info);
                if ( info.count !== 0 ) {
                    this.myMac = info.results[0].mac_address;
                    this.hasMac = true;
                    console.log('info.count != 0');
                    console.log('User Mac Info');
                    console.log(this.myMac);
                    console.log('Setting hasMac as ' + this.hasMac);
                    console.log(this.hasMac);
                } else {
                    this.hasMac = false;
                    console.log('info.count == 0');
                    console.log('Setting hasMac:');
                    console.log(this.hasMac);
                }
            },
            error => {
                console.log(error);
            }
        );
    }

    saveClicked() {
        if ( this.hasMac === false ) {
            this.createSmartBand();
        } else { // this.hasMac === true
            this.saveMacinfo();
        }
        this.saveWasClicked = true;
    }

    createSmartBand() {
        this.hasMac = true;
        this.user.createUserDevice( this.data, this.myMac ).subscribe(
            info => {
                console.log('createUserDevice success info');
                console.log(info);
            },
            error => {
                console.log(error);
            }
        );
    }

    saveMacinfo() {
        console.log('calling user.updateUserDevice');
        this.user.updateUserDevice( this.data, this.myMac ).subscribe(
            info => {
                console.log('updateUserDevice success info');
                console.log(info);
            },
            error => {
                console.log(error);
            }
        );
    }

    getLS(key) {
        return localStorage.getItem(key);
    }

}
