import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SignupCeoComponent } from './signup-ceo.component';

export interface DialogData {
  type: number; /// 1 for Dept, 2 for Role
}


@Component({
  selector: 'app-signup-ceo-add-popup',
  templateUrl: './signup-ceo-add-popup.component.html',
  styleUrls: ['./signup-ceo.component.scss'],
  providers: [ UserService ]
})
export class SignupCeoAddPopupComponent {

  newName;

  constructor(
    private dialogRef: MatDialogRef<SignupCeoComponent>,
    private user: UserService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    data.type;
    this.newName = '';
  }



  getLS(key) {
    return localStorage.getItem(key);
  }

  save( ) {
    this.dialogRef.close(this.newName);
  }

  delete() {
    this.dialogRef.close('');
  }

  cancel () {
    this.dialogRef.close();
  }
}
