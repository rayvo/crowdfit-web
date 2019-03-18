import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-accounting-management',
  templateUrl: './accounting-management.component.html',
  styleUrls: ['./accounting-management.component.css'],
  animations: [routerTransition()]
})
export class AccountingManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
