import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-resident-management',
  templateUrl: './resident-management.component.html',
  styleUrls: ['./resident-management.component.css'],
  animations: [routerTransition()]
})
export class ResidentManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
