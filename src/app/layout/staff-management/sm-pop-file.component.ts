import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StaffManagementComponent } from './staff-management.component';


@Component({
  selector: 'app-sm-pop-file',
  templateUrl: './sm-pop-file.component.html',
  styleUrls: ['./staff-management.component.css'],
  providers: [ UserService ]
})
export class SMPopFileComponent {

  constructor(
  ) {}



  getLS(key) {
    return localStorage.getItem(key);
  }

}
