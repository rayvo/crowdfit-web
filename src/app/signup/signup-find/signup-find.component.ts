import { Component } from '@angular/core';
import { JusoService } from 'src/app/services/juso.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';
import { SignupFindJusoComponent } from './signup-find-juso.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup-find',
  templateUrl: './signup-find.component.html',
  styleUrls: ['./signup-find.component.scss'],
  providers: [JusoService, UserService]
})
export class SignupFindComponent {

  selectedJuso;
  parsedJuso;
  aptDetailsDong;
  aptDetailsHo;
  department;
  position;

  percentDone: number;
  uploadSuccess: boolean;


  constructor(
    private user: UserService,
    private dialog: MatDialog,
    ) {
    this.selectedJuso = { id: -1, jibunAddr: '' };
    this.parsedJuso = '';
    this.aptDetailsDong = '';
    this.aptDetailsHo = '';
    this.department = '';
    this.position = '';
  }

  openJusoDialog() {
    const dialogRef = this.dialog.open(SignupFindJusoComponent);

    dialogRef.afterClosed().subscribe(
      result => {
        this.parsedJuso = JSON.parse( result );
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

  uploadFile( file ) {
    // TODO The below params are probably wrong. recheck file_url
    const selectedFiles = file.target.files;
    console.log('SELECTDFILES########');
    console.log(selectedFiles[0] );
    console.log( selectedFiles[0].file );
    console.log(selectedFiles[0].name);
    console.log(selectedFiles[0].size);

    this.user.fileUpload( selectedFiles[0].name, selectedFiles[0] , selectedFiles[0].size ).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.uploadSuccess = true;
        }
      },
      error => {
        console.log(error);
      }
    );
  }



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
