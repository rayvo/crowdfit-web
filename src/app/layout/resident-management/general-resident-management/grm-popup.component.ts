import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GeneralResidentManagementComponent } from './general-resident-management.component';

export interface DialogData {
  name: string;
  donghosu: string;
  phone: string;
  type: number;
}


@Component({
  selector: 'app-grm-popup',
  templateUrl: './grm-popup.component.html',
  styleUrls: ['./general-resident-management.component.css'],
  providers: [ UserService ]
})
export class GRMPopupComponent {

  constructor(
    private dialogRef: MatDialogRef<GeneralResidentManagementComponent>,
    private user: UserService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}



  getLS(key) {
    return localStorage.getItem(key);
  }

}
