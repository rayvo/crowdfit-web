import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-class-management',
  templateUrl: './class-management.component.html',
  styleUrls: ['./class-management.component.css'],
  animations: [routerTransition()]
})
export class ClassManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
