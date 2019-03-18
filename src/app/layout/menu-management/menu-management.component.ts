import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-menu-management',
  templateUrl: './menu-management.component.html',
  styleUrls: ['./menu-management.component.css'],
  animations: [routerTransition()]
})
export class MenuManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
