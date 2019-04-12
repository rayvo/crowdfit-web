import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { SignupCeoEditPopupComponent } from './signup-ceo-edit-popup.component';
import { SignupCeoAddPopupComponent } from './signup-ceo-add-popup.component';
import { SignupCeoDelPopupComponent } from './signup-ceo-del-popup.component';
import { Router } from '@angular/router';
import { deepStrictEqual } from 'assert';




export interface DeptList {
  id: number;
  name: string;
  desc: string;
}
// const DEPT_DATA: DeptList[] = [
//   { id: 1, name: 'Finance' },
//   { id: 2, name: 'Management' },
//   { id: 3, name: 'Front' },
// ];

export interface RoleList {
  id: number;
  name: string;
  desc: string;
}
// const ROLE_DATA: RoleList[] = [
//   { id: 1, name: 'Accountant' },
//   { id: 2, name: 'Secretary' },
//   { id: 3, name: 'Front Desk' },
// ];


@Component({
  selector: 'app-signup-ceo',
  templateUrl: './signup-ceo.component.html',
  styleUrls: ['./signup-ceo.component.scss']
})
export class SignupCeoComponent implements OnInit {

  depts: DeptList[] = [];
  roles: RoleList[] = [];
  selectedDept;
  selectedRole;

  constructor(
    private dialog: MatDialog,
    private user: UserService,
    private router: Router,
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
    this.depts.length = 0; // Clear the array without creating a new reference
    this.user.listAllDepartment( localStorage.getItem('aptId') ).subscribe(
      data => {
        // TODO Replace ______
        data.____.forEach(element => {
          this.depts.push({id: element.id, name: element.name, desc: element.description});
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  deptClicked( aDept ) {
    console.log(aDept);
    this.selectedDept = aDept;
    this.getRoleData(aDept.id);
  }

  getRoleData( deptId ) {
    this.roles.length = 0; // Clear the array without creating a new reference
    this.user.listAllRoleOfDepartment( deptId ).subscribe(
      data => {
        // TODO Replace ____
        data._____.forEach(element => {
          this.roles.push({id: element.id, name: element.name, desc: element.description});
        });
      },
      error => {
        console.log(error);
      }
    );
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
        // data is the name of the dept or role
        if ( data != null ) {
          if ( myType === 1 ) {
            // TODO create Dept
          } else {
            // TODO create Role
          }
        } // else canceled so do nothing
      },
      error => {
        console.log(error);
      }
    );

  }
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
        if ( data != null ) {
          if ( myType === 1 ) {
            // TODO Update dept
          } else {
            // TODO Update role
          }
        } // else canceled so do nothing
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
          if ( myType === 1 ) {
            // TODO Delete Dept
          } else {
            // TODO Delete Role
          }
        } // else canceled so do nothing
      },
      error => {
        console.log(error);
      }
    );
  }




  saveClicked() {
    this.router.navigate(['/menu/danji/']);
  }


}
