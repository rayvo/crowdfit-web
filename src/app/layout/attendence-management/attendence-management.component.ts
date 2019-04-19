import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDividerModule, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

export interface Attendance {
  value: string;
  viewValue: string;
}

export interface AData {
  img: string;
  at: string;
}
@Component({
  selector: 'app-attendence-management',
  templateUrl: './attendence-management.component.html',
  styleUrls: ['./attendence-management.component.css'],
  providers: [UserService]
})
export class AttendenceManagementComponent implements OnInit {

  cols = [0, 1, 2, 3, 4, ];
  rows = [0, 5, 10, 15, 20, ];

  // displayedColumns: string[] = ['realtime', 'class', 'staff', 'member', 'guest', 'today'];

  attendenceList: AData[] = [];
  filterNumber;
  filteredAList: AData[] = [];

  attendences: Attendance[] = [
    { value: '0', viewValue: '전체' },
    { value: '1', viewValue: '회원권만료예정' },
    { value: '2', viewValue: '락커기간만료예정' },
    { value: '3', viewValue: '신규회원' },
    { value: '4', viewValue: '만료회원' },
    { value: '5', viewValue: '클래스타임오버체크' },
    { value: '6', viewValue: '휴회회원입장' }
  ];

  constructor(
    private dialog: MatDialog,
    private user: UserService
  ) {
    this.getAttendanceData();
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // this.dataSource1.filterPredicate = ( data: AList, filter: string ) => {
    //   return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
    //   data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    // };
  }

  getAttendanceData() {
    this.user.getAttendanceData().subscribe(
      data => {

      },
      error => {
        console.log(error);
      }
    );
  }

  // TODO take an int (predetermined) and filter -> remake data -> reload data
  filterAndReloadTable() {
    for ( const p of this.attendenceList ) {

    }
  }
}


