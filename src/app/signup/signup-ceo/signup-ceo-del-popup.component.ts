import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SignupCeoComponent } from './signup-ceo.component';

export interface DialogData {
  name: string;
  type: number;
}


@Component({
  selector: 'app-signup-ceo-del-popup',
  templateUrl: './signup-ceo-del-popup.component.html',
  styleUrls: ['./signup-ceo.component.scss'],
  providers: [ UserService ]
})
export class SignupCeoDelPopupComponent {

  newName;

  constructor(
    private dialogRef: MatDialogRef<SignupCeoComponent>,
    private user: UserService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.newName = data.name;
  }

}
