import { Component, OnInit } from '@angular/core';
import { JusoService } from 'src/app/services/juso.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';
import { SignupFindJusoComponent } from './signup-find-juso.component';

@Component({
  selector: 'app-signup-find',
  templateUrl: './signup-find.component.html',
  styleUrls: ['./signup-find.component.scss'],
  providers: [JusoService, UserService]
})
export class SignupFindComponent implements OnInit {



  constructor(private juso: JusoService, private user: UserService, private dialog: MatDialog) {

  }

  ngOnInit() {
  }



  /* Make one that uses the popup window
  searchJusos = () => {

  }
  */

 openJusoDialog() {
  const dialogRef = this.dialog.open(SignupFindJusoComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

  // UserRole, UserStatus, Country (Always id=1), City, Address, Apt
  applyClicked = () => {
    this.user.setUserRole(
      Number(localStorage.getItem('id')),
      Number(localStorage.getItem('role'))
    ).subscribe(
      data => {

      },
      error => {
        console.log(error);
      }
    );
    this.user.setUserStatusWait(
      Number(localStorage.getItem('id'))
    ).subscribe(
      data => {

      },
      error => {
        console.log(error);
      }
    );

  }
}
