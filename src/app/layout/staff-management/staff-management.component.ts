import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

import { SMPopupComponent } from './sm-popup.component';
import { SMPopFileComponent } from './sm-pop-file.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


export interface WaitList {
  name: string;
  department: string;
  position: string;
  phone: string;
}
const WAIT_DATA: WaitList[] = [
  { name: 'John', department: 'Adept', position: 'First', phone: '0101111AAAA' },
  { name: 'Sarah', department: 'Bdept', position: 'Second', phone: '0102222BBBB' }
];

export interface ApprovedList {
  name: string;
  department: string;
  position: string;
  phone: string;
  approvedBy: string;
  approvedDate: string;
}
const APPROVED_DATA: ApprovedList[] = [
  { name: 'Elijah', department: 'Cdept', position: 'Third', phone: '0103333CCCC', approvedBy: 'Habced', approvedDate: 'Jan 1' },
  { name: 'Alyssa', department: 'Ddept', position: 'Fourth', phone: '0104444DDDD', approvedBy: 'Habced', approvedDate: 'March20' }
];

export interface EvictedList {
  name: string;
  department: string;
  position: string;
  phone: string;
  evictedDate: string;
  reason: string;
}
const EVICTED_DATA: EvictedList[] = [
  { name: 'Mike', department: 'Edept', position: 'Fifth', phone: '0105555EEEE', evictedDate: 'Jan 4', reason: 'Did Not Work' },
  { name: 'Grace', department: 'Fdept', position: 'Sixth', phone: '0106666FFFF', evictedDate: 'March 23', reason: 'Slept At Work' }
];

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css'],
  providers: [ UserService ]
})
export class StaffManagementComponent {
  constructor(
    private dialog: MatDialog,
    private user: UserService,
    ) {
      this.getStaffData();
    }

  displayedColumns1: string[] = ['name', 'department', 'position', 'phone', 'file', 'approve', 'delete' ];
  dataSource1 = new MatTableDataSource(WAIT_DATA);

  displayedColumns2: string[] = ['name', 'department', 'position', 'phone', 'approvedBy', 'approvedDate', 'file', 'out'];
  dataSource2 = new MatTableDataSource(APPROVED_DATA);

  displayedColumns3: string[] = ['name', 'department', 'position', 'phone', 'evictedDate', 'reason'];
  dataSource3 = new MatTableDataSource(EVICTED_DATA);

  // Only search names and numbers
  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
    this.dataSource2.filter = filterValue.trim().toLowerCase();
    this.dataSource3.filter = filterValue.trim().toLowerCase();
  }

  // TODO Finish when I get the db
  getStaffData() {/*
    allData = this.user.getUserStatuses().results;
    for ( const data of allData ) {
      switch ( data.status ) {
        case 1:
          theStaff = this.user.getSingleUser(data.user);
          dataSource1.push({
            name: theStaff.name,
          });
          break;
        case 2:
          break;
        case 3:
          break;
        default:
          break;
      }
    }*/
  }

  openDialog( personInfo: any, btnType: any, newStatus: any ) {
    const dialogRef = this.dialog.open(SMPopupComponent, {
      width: '250px',
      data: {
        name: personInfo.name,
        dept: personInfo.department,
        pos: personInfo.position,
        phone: personInfo.phone,
        type: btnType,
      }
    });

    dialogRef.afterClosed().subscribe(
      result => {
        if ( result !== '') {
          // TODO Change userStatus of person to newStatus
          console.log(btnType + ' person: ' + result);
        }
      },
      error => {
        console.log(error);
      }
    );

  }

  showFile(row: any) {

  }


}
