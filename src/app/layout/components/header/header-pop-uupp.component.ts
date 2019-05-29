import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DialogData } from 'src/app/signup/signup-ceo/signup-ceo-add-popup.component';
import { HeaderComponent } from 'src/app/layout-member/components/header/header.component';


@Component({
  selector: 'app-header-pop-uupp',
  templateUrl: './header-pop-uupp.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ UserService ]
})
export class HPopUUPPComponent {

    saveWasClicked;

    constructor(
        private dialogRef: MatDialogRef<HeaderComponent>,
        private user: UserService,
        // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
        this.saveWasClicked = false;
    }

    getLS(key) {
        return localStorage.getItem(key);
    }

    uploadImg() {

    }

    saveClicked() {

    }


}
