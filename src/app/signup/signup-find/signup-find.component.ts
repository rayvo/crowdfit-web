import { Component, OnInit } from '@angular/core';
import { JusoService } from 'src/app/services/juso.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';
import { SignupFindJusoComponent } from './signup-find-juso.component';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import proj4 from 'proj4';
import { Router } from '@angular/router';

export interface Pos {
  value: string;
  viewValue: string;
}

export interface Dept {
  name: string;
  pos: Pos[];
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

  deptGroups: Dept[];
  deptControl = new FormControl();

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
      this.setDeptPosList();
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
    const dialogRef = this.dialog.open(SignupFindJusoComponent);
    dialogRef.afterClosed().subscribe(
      result => {
        this.jusoSearchClicked = true;
        if ( result != null ) {
          this.parsedJuso = JSON.parse(result);

          // 제공해 드리는 죄표
          proj4.defs['EPSG:5179'] =
          '+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +units=m +no_defs';

          // 구글 좌표계
          proj4.defs['EPSG:900913'] =
          '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs';

          const grs80 = proj4.Proj(proj4.defs['EPSG:5179']);
          // const google = proj4.Proj(proj4.defs['EPSG:900913']);
          const wgs84 = proj4.Proj(proj4.defs['EPSG:4326']); // 경위도

          // 한국지역정보개발원 좌표
          // let p = proj4.Point( 945959.038134181414141414 , 1953051.7348996028 );
          let p = proj4.Point(  Number(this.parsedJuso.entX) , Number(this.parsedJuso.entY) );
          // p = proj4.transform( grs80, google, p);
          p = proj4.transform( grs80, wgs84, p);

          // x = longitude roughly 127
          // y = latitude roughly 37
          // console.log(p.x + ' ' + p.y);
          this.parsedJuso['longitude'] = p.x.toFixed(8);
          this.parsedJuso['latitude'] = p.y.toFixed(8);
          // console.log(this.parsedJuso);

          // TODO
          // DOUBLE CHECK the function isAvailableApt

          const isAvailable = this.checkAptAvailability();
          const myRole = localStorage.getItem('role');
          const tempCtrl = this.secondFormGroup.controls['secondCtrl'];

          if ( isAvailable === false && myRole === '1' ) {
            tempCtrl.setErrors(null);
            this.jusoAvail = null;
          } else if ( isAvailable === true && myRole === '1' ) {
            tempCtrl.setErrors({'incorrect': true});
            this.jusoAvail = true;
          } else if ( isAvailable === false ) {
            tempCtrl.setErrors({'incorrect': true});
            this.jusoAvail = false;
          } else { // isAvailable === true
            tempCtrl.setErrors(null);
            this.jusoAvail = null;
          }


        } else {
          this.secondFormGroup.controls['secondCtrl'].setErrors({'incorrect': true});
        }

      },
      error => {
        console.log(error);
      }
    );
  }

  checkAptAvailability() {
    let toReturn = false;
    console.log('HERE');
    this.user.isAptAvailable(this.parsedJuso).subscribe(
      data => {
        console.log('Data is: ' + data);
        if ( data.res_code ) {
          toReturn = true;
          localStorage.setItem('aptId', data.apt_id);
          console.log('Changed to true');
        } else {
          toReturn = false;
          localStorage.setItem('aptId', data.apt_id);
          console.log('Changed to false');
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log('Gonna return');
    return toReturn;
  }


  // TODO When applying as 직원 be able to put 부서 and 직책 in somewhere
  getLS(key) {
    return localStorage.getItem(key);
  }

  setDeptPosList() {
    // TODO
    // Call getDPByApt in the db
    // For now temp and fake data
    this.deptGroups = [
      {
        name: 'Management',
        pos: [
          {value: '1', viewValue: 'General'},
          {value: '2', viewValue: 'English Affairs'},
          {value: '3', viewValue: 'Quality Assurance'}
        ]
      },
      {
        name: 'Finance',
        pos: [
          {value: '4', viewValue: 'Wages' },
          {value: '5', viewValue: 'Budget'},
        ]
      },
      {
        name: 'Human Resource',
        pos: [
          {value: '6', viewValue: 'Head' },
          {value: '7', viewValue: 'Emergency Affairs'},
          {value: '8', viewValue: 'Rule Enforcement'},
        ]
      },

    ];

  }


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


  // TODO
  // Double check service calls
  applyClicked = () => {

    let errorExists = false;

    switch (localStorage.getItem('role')) {
      case '1': {

        this.user.ceoRegister(
          localStorage.getItem('id'),
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
          localStorage.getItem('id'),
          localStorage.getItem('aptId'),
          localStorage.getItem('deptId'),
          localStorage.getItem('roleId'),
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
          localStorage.getItem('id'),
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
