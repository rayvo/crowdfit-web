import { Component, OnInit } from '@angular/core';
import { JusoService } from 'src/app/services/juso.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';
import { SignupFindJusoComponent } from './signup-find-juso.component';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) {
    this.selectedJuso = { id: -1, jibunAddr: '' };
    this.parsedJuso = '';
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
      this.deptControl.setErrors({'incorrect': null});
    }

    this.firstFormGroup.controls['firstCtrl'].setErrors(null);
  }


  openJusoDialog() {
    const dialogRef = this.dialog.open(SignupFindJusoComponent);

    dialogRef.afterClosed().subscribe(
      result => {
        if ( result != null ) {
          this.parsedJuso = JSON.parse(result);
          // TODO
          // DOUBLE CHECK the function isAvailableApt
          const isAvailable = this.user.isAvailableApt(/*SomeData*/this.parsedJuso);
          if (/* Not Availble */false) {
            this.secondFormGroup.controls['secondCtrl'].setErrors({'incorrect': true});
          } else {
            this.secondFormGroup.controls['secondCtrl'].setErrors(null);
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


    // Get userId from localStorage
    // Get aptId from apt lookup for nonceo. For ceo you will be making it before ceoRegister


    switch (localStorage.getItem('role')) {
      case '1': {
        // TODO ask ray
        // To create apt you need a ceo's UserRoleStatus id
        // but to create a CEO you need apt_id
        // Which one comes first?

        // TODO request Ray
        // I think having the user_role_status returned in ceoRegister will be very helpful
        this.user.ceoRegister(1, 2, 3).subscribe(
          data => {

          },
          error => {
            console.log(error);
          }
        );
        this.user.createApt(
          this.parsedJuso,
          this.thirdFormGroup.controls['thirdCtrl1'].value,
          this.thirdFormGroup.controls['thirdCtrl2'].value,
          1 // TODO user_role_status_id
          ).subscribe(
          data => {

          },
          error => {
            console.log(error);
          }
        );
        break;
      }
      case '2': {
        this.user.staffRegister(1, 2, 3).subscribe(
          data => {

          },
          error => {
            console.log(error);
          }
        );
        break;
      }
      case '3': {
        this.user.userRegister(1, 2, 3).subscribe(
          data => {

          },
          error => {
            console.log(error);
          }
        );
        break;
      }
      default: {

      }
    }
  }
}
