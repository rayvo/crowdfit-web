import { Component, OnInit, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

import { SMPopupComponent } from './sm-popup.component';
import { SMPopFileComponent } from './sm-pop-file.component';


export interface WaitList {
  id: number;
  name: string;
  department: string;
  position: string;
  phone: string;
}
const WAIT_DATA: WaitList[] = [
  { id: 1, name: 'John', department: 'Adept', position: 'First', phone: '0101111AAAA' },
  { id: 2, name: 'Sarah', department: 'Bdept', position: 'Second', phone: '0102222BBBB' },
  { id: 1, name: 'Asdf', department: 'Adept', position: 'First', phone: '0101111AAAA' },
  { id: 2, name: 'Sdfg', department: 'Bdept', position: 'Second', phone: '0102222BBBB' },
  { id: 1, name: 'Dfgh', department: 'Adept', position: 'First', phone: '0101111AAAA' },
  { id: 2, name: 'Fghj', department: 'Bdept', position: 'Second', phone: '0102222BBBB' },
  { id: 1, name: 'Ghjk', department: 'Adept', position: 'First', phone: '0101111AAAA' },
  { id: 2, name: 'Hjkl', department: 'Bdept', position: 'Second', phone: '0102222BBBB' },
];

export interface ApprovedList {
  id: number;
  name: string;
  department: string;
  position: string;
  phone: string;
  approvedBy: string;
  approvedDate: string;
}
const APPROVED_DATA: ApprovedList[] = [
  { id: 3, name: 'Elijah', department: 'Cdept', position: 'Third', phone: '0103333CCCC', approvedBy: 'Habced', approvedDate: 'Jan 1' },
  { id: 4, name: 'Alyssa', department: 'Ddept', position: 'Fourth', phone: '0104444DDDD', approvedBy: 'Habced', approvedDate: 'March20' }
];

export interface EvictedList {
  id: number;
  name: string;
  department: string;
  position: string;
  phone: string;
  evictedDate: string;
  reason: string;
}
const EVICTED_DATA: EvictedList[] = [
  { id: 5, name: 'Mike', department: 'Edept', position: 'Fifth', phone: '0105555EEEE', evictedDate: 'Jan 4', reason: 'Did Not Work' },
  { id: 6, name: 'Grace', department: 'Fdept', position: 'Sixth', phone: '0106666FFFF', evictedDate: 'March 23', reason: 'Slept At Work' }
];

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css'],
  providers: [ UserService ]
})
export class StaffManagementComponent implements OnInit {
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

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

  // Filtering by only name and phone
  ngOnInit() {
    this.dataSource1.filterPredicate = ( data: WaitList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };

    this.dataSource2.filterPredicate = ( data: ApprovedList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };

    this.dataSource3.filterPredicate = ( data: EvictedList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };
  }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.dataSource1.paginator = this.paginator.toArray()[0];
    this.dataSource2.paginator = this.paginator.toArray()[1];
    this.dataSource3.paginator = this.paginator.toArray()[2];
  }

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
        case 1:{
          theStaff = this.user.getSingleUser(data.user);
          dataSource1.push({
            id: theStaff.id,
            name: theStaff.name,
          });
          break;
        }
        case 2: {
          break;
        }
        case 3: {
          break;
        }
        default: {
          break;
        }
      }
    }*/
  }

  openDialog( personInfo: any, btnType: any ) {/*
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
          switch ( btnType ) {
            case 'APPROVE': {
              this.user.setUserStatusApproved(personInfo.id);
              break;
            }
            case 'DELETE': {
              this.user.setUserStatusNone(personInfo.id);
              break;
            }
            case 'MOVE OUT': {
              this.user.setUserStatusEvicted(personInfo.id);
              break;
            }
            default: {
              console.log('Invalid Choice');
              break;
            }
          }

        }
      },
      error => {
        console.log(error);
      }
    );*/

  }

  showFile(row: any) {

  }


}
