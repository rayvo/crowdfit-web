import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-member',
  templateUrl: './layout-member.component.html',
  styleUrls: ['./layout-member.component.scss']
})
export class LayoutMemberComponent implements OnInit {

  collapedSideBar: boolean;

  constructor() { }

  ngOnInit() {
  }

  receiveCollapsed($event) {
      this.collapedSideBar = $event;
  }

}
