import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StaffManagementComponent } from './staff-management.component';

export interface DialogData {
  name: string;
  dept: string;
  pos: string;
  phone: string;
  type: string;
}


@Component({
  selector: 'app-sm-popup',
  templateUrl: './sm-popup.component.html',
  styleUrls: ['./staff-management.component.css'],
  providers: [ UserService ]
})
export class SMPopupComponent {

  constructor(
    private dialogRef: MatDialogRef<StaffManagementComponent>,
    private user: UserService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}



  getLS(key) {
    return localStorage.getItem(key);
  }

}
