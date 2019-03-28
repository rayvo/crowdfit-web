import { Component, OnInit } from '@angular/core';
import { JusoService } from 'src/app/services/juso.service';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-signup-find-juso',
  templateUrl: './signup-find-juso.component.html',
  styleUrls: ['./signup-find.component.scss'],
  providers: [JusoService, UserService]
})
export class SignupFindJusoComponent {
  /*
   * By using the id of the selectedJuso find the same juso in fullJusos to get all of the details.
   * Add the details into the db.
   *
   */
  fullDetailJusos = [];
  lessDetailJusos = [];
  selectedJuso;
  selectedJusoStringed;

  jusoKeyword;

  constructor(private juso: JusoService, private user: UserService, private dialog: MatDialog) {
    this.selectedJuso = { id: -1, jibunAddr: '' };
    this.selectedJusoString = '';
    this.jusoKeyword = '';
  }


  searchJusos = () => {
    this.juso.getJusos(this.jusoKeyword).subscribe(
      data => {
        this.fullDetailJusos = data.results.juso;
        this.lessDetailJusos = [];
        let i = 0;
        for ( const j of data.results.juso ) {
          this.lessDetailJusos.push({ id: i, jibunAddr: j.jibunAddr });
          i++;
        }
      },
      error => {
        console.log(error);
      }
    );
  }
  jusoClicked = juso => {
    this.selectedJuso = juso;
    this.selectedJusoStringed = JSON.stringify(this.fullDetailJusos[juso.id]);
}
}
