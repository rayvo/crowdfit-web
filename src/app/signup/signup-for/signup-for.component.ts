import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup-for',
  templateUrl: './signup-for.component.html',
  styleUrls: ['./signup-for.component.scss'],
  providers: [UserService]
})
export class SignupForComponent implements OnInit {

  constructor(
    private user: UserService
  ) { }

  ngOnInit() {
  }

  nonmemberClicked = () => {
    this.user.setUserRole({id: 1} , 1).subscribe(
      data => {

      },
      error => {
        console.log(error);
      }
    );
  }
  residentClicked = () => {
    this.user.setUserRole({id: 1} , 3).subscribe(
      data => {

      },
      error => {
        console.log(error);
      }
    );
  }
  staffClicked = () => {
    this.user.setUserRole({id: 1} , 2).subscribe(
      data => {

      },
      error => {
        console.log(error);
      }
    );
  }
  adminClicked = () => {
    this.user.setUserRole({id: 1} , 4).subscribe(
      data => {

      },
      error => {
        console.log(error);
      }
    );
  }

}
