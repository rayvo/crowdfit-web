import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { SignupCeoEditPopupComponent } from './signup-ceo-edit-popup.component';
import { SignupCeoAddPopupComponent } from './signup-ceo-add-popup.component';
import { SignupCeoDelPopupComponent } from './signup-ceo-del-popup.component';




export interface DeptList {
  id: number;
  name: string;
}
const DEPT_DATA: DeptList[] = [
  { id: 1, name: 'Finance' },
  { id: 2, name: 'Management' },
  { id: 3, name: 'Front' },
];

export interface RoleList {
  id: number;
  name: string;
}
const ROLE_DATA: RoleList[] = [
  { id: 1, name: 'Accountant' },
  { id: 2, name: 'Secretary' },
  { id: 3, name: 'Front Desk' },
];


@Component({
  selector: 'app-signup-ceo',
  templateUrl: './signup-ceo.component.html',
  styleUrls: ['./signup-ceo.component.scss']
})
export class SignupCeoComponent implements OnInit {

  depts = DEPT_DATA;
  roles = ROLE_DATA;
  selectedDept;
  selectedRole;

  constructor(
    private dialog: MatDialog,
    private user: UserService,
  ) {
    this.getDeptData();
    this.selectedDept = '';
    this.selectedRole = '';
    console.log(this.depts);
    console.log(this.roles);
  }

  ngOnInit() {
  }


  getDeptData() {

  }

  deptClicked( aDept ) {
    console.log(aDept);
    this.selectedDept = aDept;
  }

  getRoleData() {

  }

  roleClicked( aRole ) {
    console.log(aRole);
    this.selectedRole = aRole;
  }

  createDeptRole( myType ) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      // name: myDeptOrRole.name,
      type: myType
    };

    const dialogRef = this.dialog.open(SignupCeoAddPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if ( data != null ) {
          // create dept or role
          if ( myType === 1 ) {

          } else {

          }
        } else {
          // do nothing
        }
      },
      error => {
        console.log(error);
      }
    );

  }
  // myType : 1 for Dept Update , 2 for Role Update
  updateDeptRole( myDeptOrRole, myType ) {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      name: myDeptOrRole.name,
      type: myType
    };

    const dialogRef = this.dialog.open(SignupCeoEditPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if ( data === '' ) {
          // Delete dept or role
          if ( myType === 1 ) {

          } else {

          }
        } else if ( data != null ) {
          // Update dept or role
          if ( myType === 1 ) {

          } else {

          }
        } else {
          // do nothing with dept or role
        }
      },
      error => {
        console.log(error);
      }
    );

  }

  deleteDeptRole( myDeptOrRole, myType ) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      name: myDeptOrRole.name,
      type: myType
    };

    const dialogRef = this.dialog.open(SignupCeoDelPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if ( data === true ) {
          // Delete dept or role
          if ( myType === 1 ) {

          } else {

          }
        } else {
          // do nothing with dept or role
        }
      },
      error => {
        console.log(error);
      }
    );
  }




  saveClicked() {

  }


}
