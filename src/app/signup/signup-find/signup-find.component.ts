import { Component, OnInit } from '@angular/core';
import { JusoService } from 'src/app/services/juso.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { SignupFindJusoComponent } from './signup-find-juso.component';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import proj4 from 'proj4';
import { Router } from '@angular/router';

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
  selector: 'app-signup-find',
  templateUrl: './signup-find.component.html',
  styleUrls: ['./signup-find.component.scss'],
  providers: [JusoService, UserService]
})
export class SignupFindComponent implements OnInit {
  selectedJuso;
  parsedJuso;
  jusoSearchClicked;
  jusoAvail;

  percentDone: number;
  uploadSuccess: boolean;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  deptGroups: Dept[] = [];
  deptControl = new FormControl();

  selectedDept;
  selectedRole;

  constructor(
    private user: UserService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.selectedJuso = { id: -1, jibunAddr: '' };
    this.parsedJuso = '';
    this.jusoSearchClicked = false;
    this.jusoAvail = null;
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this.formBuilder.group({
      thirdCtrl1: ['', Validators.required],
      thirdCtrl2: ['', Validators.required]
    });
  }


  roleClicked = (role) => {
    localStorage.setItem('role', role); // something predetermined
    if (role === 2) {
      this.thirdFormGroup.controls['thirdCtrl1'].setErrors(null);
      this.thirdFormGroup.controls['thirdCtrl2'].setErrors(null);
      this.deptControl.setErrors({'incorrect': true});
    } else {
      this.thirdFormGroup.controls['thirdCtrl1'].setErrors({'incorrect': true});
      this.thirdFormGroup.controls['thirdCtrl2'].setErrors({'incorrect': true});
      this.deptControl.setErrors(null);
    }

    this.firstFormGroup.controls['firstCtrl'].setErrors(null);
  }

  openJusoDialog() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(SignupFindJusoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      result => {
        this.jusoSearchClicked = true;
        if ( result == null ) {
          this.secondFormGroup.controls['secondCtrl'].setErrors({'incorrect': true});
        } else {
          this.parsedJuso = JSON.parse(result);

          // Set latitude and longitude
          proj4.defs['EPSG:5179'] =
          '+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs';
          proj4.defs['EPSG:900913'] =
          '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs';
          const grs80 = proj4.Proj(proj4.defs['EPSG:5179']);
          // const google = proj4.Proj(proj4.defs['EPSG:900913']);
          const wgs84 = proj4.Proj(proj4.defs['EPSG:4326']);
          let p = proj4.Point(  Number(this.parsedJuso.entX) , Number(this.parsedJuso.entY) );
          // p = proj4.transform( grs80, google, p);
          p = proj4.transform( grs80, wgs84, p);
          this.parsedJuso['longitude'] = p.x.toFixed(8);
          this.parsedJuso['latitude'] = p.y.toFixed(8);




          // Check Apt Availability
          let isAvailable = null;
          const myRole = localStorage.getItem('role');

          this.user.isAptAvailable(this.parsedJuso).subscribe(
            data => {
              if ( data.res_code ) { // res_code Success
                isAvailable = true;
                localStorage.setItem('aptId', data.apt_id);
                if ( myRole === '1' ) { // res_code Success and CEO
                  this.secondFormGroup.controls['secondCtrl'].setErrors({'incorrect': true});
                  this.jusoAvail = true;
                } else { // res_code Success and not CEO
                  this.secondFormGroup.controls['secondCtrl'].setErrors(null);
                  this.jusoAvail = null;
                  if ( myRole === '2' ) { // res_code Success and STAFF
                    console.log('aptId: ' + localStorage.getItem('aptId'));
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
                              this.deptGroups.push(newDept);
                            }, error => { console.log(error); }
                          );
                        }
                      }, error => { console.log(error); }
                    );
                  }
                }
              } else {
                isAvailable = false;
                localStorage.setItem('aptId', data.apt_id);
                if ( myRole === '1' ) { // res_code Fail and CEO
                  this.secondFormGroup.controls['secondCtrl'].setErrors(null);
                  this.jusoAvail = null;
                } else {  // res_code Fail and not CEO
                  this.secondFormGroup.controls['secondCtrl'].setErrors({'incorrect': true});
                  this.jusoAvail = false;
                }
              }
            }, error => { console.log(error); }
          );
        }
      }, error => { console.log(error); }
    );
  }


  getLS(key) {
    return localStorage.getItem(key);
  }


  roleSelection( deptIdString, roleIdString ) {
    this.selectedDept = Number(deptIdString);
    this.selectedRole = Number(roleIdString);
    console.log( '' + this.selectedDept + ' ' + this.selectedRole);
  }

  // TODO This portion will be changing soon
  // TODO Store file id in localStorage
  uploadFile(file) {
    const selectedFiles = file.target.files;

    this.user.uploadFile(localStorage.getItem('id'), selectedFiles[0]).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round((100 * event.loaded) / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
      },
      error => {
        console.log(error);
      }
    );
  }



  applyClicked = () => {

    let errorExists = false;

    switch (localStorage.getItem('role')) {
      case '1': {

        this.user.ceoRegister(
          localStorage.getItem('fileId'),
          this.parsedJuso,
          this.thirdFormGroup.controls['thirdCtrl1'].value,
          this.thirdFormGroup.controls['thirdCtrl2'].value,
        ).subscribe(
          data => {
            console.log('CEO REGISTER SUCCESS!');
            console.log(data);
          },
          error => {
            errorExists = true;
            console.log(error);
          }
        );
        break;
      }
      case '2': {
        this.user.staffRegister(
          localStorage.getItem('aptId'),
          this.selectedDept,
          this.selectedRole,
          localStorage.getItem('fileId'),
        ).subscribe(
          data => {
            console.log('STAFF REGISTER SUCCESS!');
            console.log(data);
          },
          error => {
            errorExists = true;
            console.log(error);
          }
        );
        break;
      }
      case '3': {
        this.user.userRegister(
          localStorage.getItem('aptId'),
          this.thirdFormGroup.controls['thirdCtrl1'].value,
          this.thirdFormGroup.controls['thirdCtrl2'].value,
          localStorage.getItem('fileId'),
        ).subscribe(
          data => {
            console.log('USER REGISTER SUCCESS!');
            console.log(data);
          },
          error => {
            errorExists = true;
            console.log(error);
          }
        );
        break;
      }
      default: {

      }
    }


    if ( errorExists === false ) {
      this.router.navigate(['/signup/applied']);
    } else {
      // TODO What to do when error is caught
    }

  }
}
