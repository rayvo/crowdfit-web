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
    localStorage.setItem('role', '1');
  }
  residentClicked = () => {
    localStorage.setItem('role', '2');
  }
  staffClicked = () => {
    localStorage.setItem('role', '3');
  }
  adminClicked = () => {
    localStorage.setItem('role', '4');
  }

}
