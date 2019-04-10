import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';




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

  createDept( ) {

  }

  updateDept() {

  }

  deleteDept() {

  }

  getRoleData() {

  }

  roleClicked( aRole ) {
    console.log(aRole);
    this.selectedRole = aRole;
  }

  createRole() {

  }

  updateRole() {

  }

  deleteRole() {

  }


  saveClicked() {

  }


}
