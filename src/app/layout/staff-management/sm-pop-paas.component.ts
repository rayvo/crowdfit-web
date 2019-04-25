import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StaffManagementComponent } from './staff-management.component';
import { FormGroup, Validators, FormControl } from '@angular/forms';

export interface Role {
    value: string;
    viewValue: string;
}

export interface Dept {
    value: string;
    name: string;
    role: Role[];
}

@Component({
  selector: 'app-sm-pop-paas',
  templateUrl: './sm-pop-paas.component.html',
  styleUrls: ['./staff-management.component.css'],
  providers: [ UserService ]
})
export class SMPopPaasComponent {

    newUser: FormGroup;
    deptroleGroups: Dept[] = [];

    constructor(
        private dialogRef: MatDialogRef<StaffManagementComponent>,
        private user: UserService,
        // @Inject(MAT_DIALOG_DATA) public data: DialogData,
    ) {
        this.newUser = this.createFormGroup();
        this.setDeptRoleList();
    }

    createFormGroup() {
        return new FormGroup({
            // id: new FormControl(-1),
            username: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
            phone: new FormControl('', [Validators.required]),
            deptId: new FormControl('', [Validators.required]),
            roleId: new FormControl('', [Validators.required]),

        });
    }

    getLS(key) {
        return localStorage.getItem(key);
    }

    setDeptRoleList() {
        // TODO
        // Call getDeptRoleByApt in the db
        this.deptRoleGroups = [];
        this.user.listAllDepartment(localStorage.getItem('aptId')).subscribe(
            deptData => { // Set DeptRole list
              console.log('got to deptData');
              console.log(deptData);
              for ( const d of deptData.results ) {
                console.log(d);
                const newDept = {
                  value: String(d.id),
                  name: d.department_name,
                  role: [],
                };
                this.user.listAllRoleOfDepartment(d.id).subscribe(
                  roleData => {
                    console.log('got to roleData');
                    console.log(roleData);
                    for ( const r of roleData.results ) {
                      console.log(r);
                      newDept.role.push({
                        value: String(r.id),
                        viewValue: r.role
                      });
                    }
                    this.deptroleGroups.push(newDept);
                  }, error => { console.log(error); }
                );
              }
            }, error => { console.log(error); }
          );

    }

    setDeptRoleData( deptId, roleId ) {
        this.newUser.value.deptId = deptId;
        this.newUser.controls['deptId'].setErrors(null);
        this.newUser.value.roleId = roleId;
        this.newUser.controls['roleId'].setErrors(null);

    }

    getDeptName( deptId ) {
        for ( const d of this.deptroleGroups ) {
            if ( d.value === deptId ) {
                return d.name;
            }
        }
        return null;
    }

    getRoleName( roleId ) {
        for ( const d of this.deptroleGroups ) {
            for ( const r of d.role ) {
                if ( r.value === roleId ) {
                    return r.viewValue;
                }
            }
        }
        return null;
    }

    approveNewStaff() {
        this.user.createUserWithToken( this.newUser ).subscribe(
            data => {
                console.log('data1');
                console.log(data);
                const myUserId = data.user_id;
                this.user.staffRegisterByCEO(
                    data.token,
                    Number(localStorage.getItem('aptId')),
                    this.newUser.value.deptId,
                    this.newUser.value.roleId,
                    null // TODO fileId
                ).subscribe(
                    data2 => {
                        console.log('data2');
                        console.log(data2);
                        this.user.approveStaff( myUserId ).subscribe(
                            data3 => {
                                console.log('data3');
                                console.log(data3);
                                const toReturn = {
                                    id: myUserId,
                                    name: this.newUser.value.name,
                                    department: this.getDeptName(this.newUser.value.deptId),
                                    role: this.getRoleName(this.newUser.value.roleId),
                                    phone: this.newUser.value.phone
                                };
                                this.dialogRef.close( toReturn );
                            }, error3 => {
                                console.log(error3);
                                this.dialogRef.close();
                            });
                    }, error2 => {
                        console.log(error2);
                        this.dialogRef.close();
                    });
            }, error => {
                console.log(error);
                this.dialogRef.close();
            }
        );
    }


    get username() {
        return this.newUser.get('username');
    }
    get email() {
        return this.newUser.get('email');
    }
    get password() {
        return this.newUser.get('password');
    }
    get phone() {
        return this.newUser.get('phone');
    }

    getUsernameErrorMessage() {
        return this.username.hasError('required') ? 'You must enter a name' : '';
    }
    getEmailErrorMessage() {
        return this.email.hasError('required') ? 'You must enter an email' :
            this.email.hasError('email') ? 'You must enter a valid email address' : '';
    }
    getPasswordErrorMessage() {
        return this.password.hasError('required') ? 'You must enter a password' : '';
    }
    getPhoneErrorMessage() {
        return this.phone.hasError('required') ? 'You must enter a phone number' : '';
    }

}
