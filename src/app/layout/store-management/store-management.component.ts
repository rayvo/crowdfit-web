import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-store-management',
  templateUrl: './store-management.component.html',
  styleUrls: ['./store-management.component.css'],
  animations: [routerTransition()]
})
export class StoreManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
