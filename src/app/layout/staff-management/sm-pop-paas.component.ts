import { Component, Inject } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StaffManagementComponent } from './staff-management.component';
import { FormGroup, Validators, FormControl } from '@angular/forms';

export interface Role {
    id: number;
    viewValue: string;
}

export interface Dept {
    id: number;
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
    deptroleGroups: Dept[];

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
        // For now temp and fake data
        this.deptroleGroups = [
            {
            id: 1,
            name: 'Management',
            role: [
                {id: 1, viewValue: 'General'},
                {id: 2, viewValue: 'English Affairs'},
                {id: 3, viewValue: 'Quality Assurance'}
            ]
            },
            {
            id: 2,
            name: 'Finance',
            role: [
                {id: 4, viewValue: 'Wages' },
                {id: 5, viewValue: 'Budget'},
            ]
            },
            {
            id: 3,
            name: 'Human Resource',
            role: [
                {id: 6, viewValue: 'Head' },
                {id: 7, viewValue: 'Emergency Affairs'},
                {id: 8, viewValue: 'Rule Enforcement'},
            ]
            },
        ];
    }

    setDeptRoleData( deptId, roleId ) {
        this.newUser.value.deptId = deptId;
        this.newUser.controls['deptId'].setErrors(null);
        this.newUser.value.roleId = roleId;
        this.newUser.controls['roleId'].setErrors(null);

    }

    getDeptName( deptId ) {
        for ( const d of this.deptroleGroups ) {
            if ( d.id === deptId ) {
                return d.name;
            }
        }
        return null;
    }

    getRoleName( roleId ) {
        for ( const d of this.deptroleGroups ) {
            for ( const r of d.role ) {
                if ( r.id === roleId ) {
                    return r.viewValue;
                }
            }
        }
        return null;
    }

    approveNewStaff() {
        this.user.createUserWithToken( this.newUser ).subscribe(
            data => {
                const myUserId = data.user_id;
                this.user.staffRegister(
                    Number(localStorage.getItem('aptId')),
                    this.newUser.value.deptId,
                    this.newUser.value.roleId,
                    null // TODO fileId
                ).subscribe(
                    data2 => {
                        this.user.approveUser( myUserId ).subscribe(
                            data3 => {
                                const toReturn = {
                                    id: myUserId,
                                    name: this.newUser.value.name,
                                    department: this.getDeptName(this.newUser.value.deptId),
                                    role: this.getRoleName(this.newUser.value.roleId),
                                    phone: this.newUser.value.phone
                                };
                                return toReturn;
                            }, error3 => {console.log(error3); });
                    }, error2 => {console.log(error2); });
            }, error => { console.log(error); });
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
