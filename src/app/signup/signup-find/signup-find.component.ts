import { Component, OnInit } from '@angular/core';
import { JusoService } from 'src/app/services/juso.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';
import { SignupFindJusoComponent } from './signup-find-juso.component';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-find',
  templateUrl: './signup-find.component.html',
  styleUrls: ['./signup-find.component.scss'],
  providers: [JusoService, UserService]
})
export class SignupFindComponent implements OnInit {
  selectedJuso;
  parsedJuso;
  aptDetailsDong;
  aptDetailsHo;
  department;
  position;
  aptPhone;
  aptDescription;

  percentDone: number;
  uploadSuccess: boolean;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(
    private user: UserService,
    private dialog: MatDialog,
    private formBuilder: FormBuilder) {
    this.selectedJuso = { id: -1, jibunAddr: '' };
    this.parsedJuso = '';
    this.aptDetailsDong = '';
    this.aptDetailsHo = '';
    this.department = '';
    this.position = '';
    this.aptPhone = '';
    this.aptDescription = '';
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
    this.firstFormGroup.controls['firstCtrl'].setErrors(null);
  }


  openJusoDialog() {
    const dialogRef = this.dialog.open(SignupFindJusoComponent);

    dialogRef.afterClosed().subscribe(
      result => {
        console.log( result != null );
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

  // TODO For CEO, let them add desc to apt

  // UserRole, UserStatus, Country (Always id=1), City, Address, Apt, Household
  applyClicked = () => {
    /*
    this.user.createUserRole(Number(localStorage.getItem('id')), Number(localStorage.getItem('role'))).subscribe(
      data => {},
      error => {
        console.log(error);
      }
    );

    // TODO
    // For now just assume one user is staff.
    // We will have to initialize these things when we deploy the system later
    // FOr now a random user was createde as staff
    // Use setUserStatusWait
    this.user.createUserStatusWait(Number(localStorage.getItem('id'))).subscribe(
      data => {},
      error => {
        console.log(error);
      }
    );

    /*
    this.user.createUserHousehold(
      localStorage.getItem('id'),
      localStorage.getItem('hhId'),
      localStorage.getItem('isOwner')
    ).subscribe(
      data => {

      },
      error => {
        console.log(error);
      }
    );
    */
  }
}
