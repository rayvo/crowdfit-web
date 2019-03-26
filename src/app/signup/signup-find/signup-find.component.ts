import { Component, OnInit } from '@angular/core';
import { JusoService } from 'src/app/services/juso.service';

@Component({
  selector: 'app-signup-find',
  templateUrl: './signup-find.component.html',
  styleUrls: ['./signup-find.component.scss'],
  providers: [JusoService]
})
export class SignupFindComponent implements OnInit {

  jusos = [];
  selectedJuso;

  jusoKeyword;

  constructor(private juso: JusoService) {
    this.selectedJuso = { roadAddr: '' };
  }

  ngOnInit() {
  }

  jusoSearch = () => {
    this.juso.searchJuso(this.jusoKeyword);
  }

}
