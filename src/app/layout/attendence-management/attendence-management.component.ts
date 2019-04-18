import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDividerModule, MatSort, MatPaginator } from '@angular/material';

export interface attendence {
  value: string;
  viewValue: string;
  }
@Component({
  selector: 'app-attendence-management',
  templateUrl: './attendence-management.component.html',
  styleUrls: ['./attendence-management.component.css']
})
export class AttendenceManagementComponent implements OnInit {

  displayedColumns: string[] = ['realtime', 'class', 'staff', 'member', 'guest', 'today'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  attendences: attendence[] = [
    { value: 'all-0', viewValue: '전체' },
    { value: 'meber-1', viewValue: '회원권만료예정' },
    { value: 'locker-2', viewValue: '락커기간만료예정' },
    { value: 'new-3', viewValue: '신규회원' },
    { value: 'expiration-4', viewValue: '만료회원' },
    { value: 'over-5', viewValue: '클래스타임오버체크' },
    { value: 'permissons-6', viewValue: '휴회회원입장' }
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

// !---------------------------table---------------------------




export interface PeriodicElement {
  realtime: number;
  class: number;
  staff: number;
  member: number;
  guest: number;
  today: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {realtime: 1, class: 1, staff: 1, member: 1, guest: 1, today: 1 },
  {realtime: 1, class: 1, staff: 1, member: 1, guest: 1, today: 1 },
  {realtime: 1, class: 1, staff: 1, member: 1, guest: 1, today: 1 },
  {realtime: 1, class: 1, staff: 1, member: 1, guest: 1, today: 1 },
  {realtime: 1, class: 1, staff: 1, member: 1, guest: 1, today: 1 },
  {realtime: 1, class: 1, staff: 1, member: 1, guest: 1, today: 1 },
  {realtime: 1, class: 1, staff: 1, member: 1, guest: 1, today: 1 },
  {realtime: 1, class: 1, staff: 1, member: 1, guest: 1, today: 1 },
  {realtime: 1, class: 1, staff: 1, member: 1, guest: 1, today: 1 },
  {realtime: 1, class: 1, staff: 1, member: 1, guest: 1, today: 1 },
];




