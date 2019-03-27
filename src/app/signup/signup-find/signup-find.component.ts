import { Component, OnInit } from '@angular/core';
import { JusoService } from 'src/app/services/juso.service';

@Component({
  selector: 'app-signup-find',
  templateUrl: './signup-find.component.html',
  styleUrls: ['./signup-find.component.scss'],
  providers: [JusoService]
})
export class SignupFindComponent implements OnInit {

  /*
   * By using the id of the selectedJuso find the same juso in fullJusos to get all of the details.
   * Add the details into the db.
   *
  */
  fullDetailJusos = [];
  lessDetailJusos = [];
  selectedJuso;


  jusoKeyword;

  constructor(private juso: JusoService) {
    this.selectedJuso = [{ id: -1, jibunAddr: '' }];
    this.jusoKeyword = '';
  }

  ngOnInit() {
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
        console.log(data.results.juso);

      },
      error => {
        console.log(error);
      }
    );
  }

  jusoClicked = (juso) => {
    console.log(juso);
    this.selectedJuso = [juso];
  }



}
