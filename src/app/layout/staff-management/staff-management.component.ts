import { Component, OnInit, ViewChild, QueryList, ViewChildren, AfterContentInit, AfterViewInit } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator, MatDialogConfig } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { SMPopupComponent } from './sm-popup.component';
import { SMPopFileComponent } from './sm-pop-file.component';

@Component({
  selector: 'app-staff-management',
  templateUrl: './staff-management.component.html',
  styleUrls: ['./staff-management.component.css'],
  providers: [ UserService ]
})
export class StaffManagementComponent implements OnInit, AfterContentInit, AfterViewInit {

  // TODO Below is fake data. remove when done
  // dataSource1 = new MatTableDataSource<WaitList>(WAIT_DATA);
  // // dataSource2 = new MatTableDataSource<InvitedList>();
  // dataSource3 = new MatTableDataSource<ApprovedList>(APPROVED_DATA);
  // dataSource4 = new MatTableDataSource<EvictedList>(EVICTED_DATA);

  displayedColumns1: string[] = ['name', 'department', 'position', 'phone', 'file', 'approve', 'delete' ];
  displayedColumns2: string[] = ['name', 'department', 'position', 'phone' ];
  displayedColumns3: string[] = ['name', 'department', 'position', 'phone', 'approvedBy', 'approvedDate', 'file', 'out'];
  displayedColumns4: string[] = ['name', 'department', 'position', 'phone', 'evictedDate', 'reason'];
  staffWaitList: WaitList[] = [];
  staffInvitedList: InvitedList[] = [];
  staffApprovedList: ApprovedList[] = [];
  staffEvictedList: EvictedList[] = [];
  dataSource1;
  dataSource2;
  dataSource3;
  dataSource4;

  constructor(
    private dialog: MatDialog,
    private user: UserService,
  ) {

    this.setStaffData(2);
    // this.setStaffData( __ );
    this.setStaffData(3);
    this.setStaffData(5);
    this.dataSource1 = new MatTableDataSource<WaitList>(this.staffWaitList);
    this.dataSource2 = new MatTableDataSource<InvitedList>(this.staffInvitedList);
    this.dataSource3 = new MatTableDataSource<ApprovedList>(this.staffApprovedList);
    this.dataSource4 = new MatTableDataSource<EvictedList>(this.staffEvictedList);

  }

  /*
   * /api/status/
   * if ( id == 1 ) { applying }
   * if ( id == 2 ) { waiting }
   * if ( id == 3 ) { approved }
   * if ( id == 4 ) { applied for 퇴거 }
   * if ( id == 5 ) { evicted }
   *
   */




  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();


  // Filtering by only name and phone
  ngOnInit() {

    this.dataSource1.filterPredicate = ( data: WaitList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };

    /*
    this.dataSource2.filterPredicate = ( data: InvitedList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };
    */

    this.dataSource3.filterPredicate = ( data: ApprovedList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };

    this.dataSource4.filterPredicate = ( data: EvictedList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };


  }
  ngAfterContentInit(): void {



  }

  ngAfterViewInit(): void {

    this.dataSource1.paginator = this.paginator.toArray()[0];
    // this.dataSource2.paginator = this.paginator.toArray()[1];
    this.dataSource3.paginator = this.paginator.toArray()[1]; // TODO change 1 to 2
    this.dataSource4.paginator = this.paginator.toArray()[2]; // TODO chagne 2 to 3
  }

  // Only search names and numbers
  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
    // this.dataSource2.filter = filterValue.trim().toLowerCase();
    this.dataSource3.filter = filterValue.trim().toLowerCase();
    this.dataSource4.filter = filterValue.trim().toLowerCase();
  }



  setStaffData( statusNum ) {
    this.user.getStaffsByStatus( localStorage.getItem('aptId'), statusNum ).subscribe(
      data => {
        if ( statusNum === 2 ) {
          data.results.forEach( element => {
            this.staffWaitList.push({

              id: element.user_id,
              name: element.fullname,
              department: element.list_dept_role_status[0].department_id,
              position: element.list_dept_role_status[0].role_id,
              // TODO when added to the api
              phone: null, // element.phone
            });
          });

        } else if ( statusNum === 3 ) {
          data.results.forEach( element => {
            this.staffApprovedList.push({

              id: element.user_id,
              name: element.fullname,
              department: element.list_dept_role_status[0].department_id,
              position: element.list_dept_role_status[0].role_id,
              // TODO when added to the api
              phone: null, // element.phone
              approvedBy: null, //
              approvedDate: new Date(Date.parse(element.last_update)),
            });
          });

        } else if ( statusNum === 5 ) {
          data.results.forEach( element => {
            this.staffEvictedList.push({

              id: element.user_id,
              name: element.fullname,
              department: element.list_dept_role_status[0].department_id,
              position: element.list_dept_role_status[0].role_id,
              // TODO when added to the api
              phone: null, // element.phone
              evictedDate: new Date(Date.parse(element.last_update)), //
              reason: null, //
            });
          });
        }

      },
      error => {
        console.log(error);
      }
    );
  }


  openDialog( personInfo: any, btnType: any, newStatus: any, ) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      name: personInfo.name,
      dept: personInfo.department,
      pos: personInfo.position,
      phone: personInfo.phone,
      type: btnType,
    };
    const dialogRef = this.dialog.open(SMPopupComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      result => {
        if ( result !== '') {
          this.updateStaffStatus(personInfo, newStatus);
          this.reloadAllData();
        } // else canceled so do nothing
      },
      error => {
        console.log(error);
      }
    );

  }

  updateStaffStatus( personInfo, newStatus ) {
    if ( newStatus === 1 ) {
      // TODO this is fake data. Remove when done
      // WAIT_DATA = this.removeFromList(WAIT_DATA, personInfo);


      // TODO The applicant was not approved


    } else if ( newStatus === 3 ) {
      // TODO this is fake data. Remove when done
      // WAIT_DATA = this.removeFromList(WAIT_DATA, personInfo);
      // personInfo.approvedBy = 'Haseung';
      // personInfo.approvedDate = 'Today';
      // APPROVED_DATA.push( personInfo );

      this.user.approveStaff(personInfo.id).subscribe(
        data => {
          this.staffWaitList = this.removeFromList(this.staffWaitList, personInfo);
          personInfo.approvedBy = 'Haseung'; // TODO
          personInfo.approvedDate = 'Today';  // TODO
          this.staffApprovedList.push( personInfo );
        },
        error => {
          console.log(error);
        }
      );
    } else if ( newStatus === 5 ) {

      // TODO this is fake data. Remove when done
      // APPROVED_DATA = this.removeFromList(APPROVED_DATA, personInfo);
      // personInfo.evictedDate = 'Yesterday';
      // personInfo.reason = 'Did not shower';
      // EVICTED_DATA.push( personInfo );



      // TODO A approved user resigned/fired

    } else {
      console.log('There is a new error');
    }
  }

  reloadAllData() {
    this.dataSource1 = new MatTableDataSource<WaitList>(this.staffWaitList);
    // this.dataSource2 = new MatTableDataSource<InvitedList>(this.staffInvitedList);
    this.dataSource3 = new MatTableDataSource<ApprovedList>(this.staffApprovedList);
    this.dataSource4 = new MatTableDataSource<EvictedList>(this.staffEvictedList);
    this.dataSource1.paginator = this.paginator.toArray()[0];
    // this.dataSource2.paginator = this.paginator.toArray()[1];
    this.dataSource3.paginator = this.paginator.toArray()[1]; // TODO change 1 to 2
    this.dataSource4.paginator = this.paginator.toArray()[2]; // TODO change 2 to 3

    // TODO Below is fake data. Remove when done
    // this.dataSource1 = new MatTableDataSource<WaitList>(WAIT_DATA);
    // // dataSource2 = new MatTableDataSource<InvitedList>();
    // this.dataSource3 = new MatTableDataSource<ApprovedList>(APPROVED_DATA);
    // this.dataSource4 = new MatTableDataSource<EvictedList>(EVICTED_DATA);
    // this.dataSource1.paginator = this.paginator.toArray()[0];
    // this.dataSource3.paginator = this.paginator.toArray()[1];
    // this.dataSource4.paginator = this.paginator.toArray()[2];
  }


  showFile(row: any) {

  }

  removeFromList( myArray, myPerson ) {
    return myArray.filter(function(person) {
      return myPerson !== person;
    });
  }


}






export interface WaitList {
  id: number;
  name: string;
  department: string;
  position: string;
  phone: string;
}

export interface InvitedList {
  id: number;
  name: string;
  department: string;
  position: string;
  phone: string;
}


export interface ApprovedList {
  id: number;
  name: string;
  department: string;
  position: string;
  phone: string;
  approvedBy: string;
  approvedDate: Date;
}

export interface EvictedList {
  id: number;
  name: string;
  department: string;
  position: string;
  phone: string;
  evictedDate: Date;
  reason?: string;
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
// const APPROVED_DATA: ApprovedList[] = [
//   { id: 3, name: 'Elijah', department: 'Cdept', position: 'Third', phone: '0103333CCCC', approvedBy: 'Habced', approvedDate: 'Jan 1' },
//   { id: 4, name: 'Alyssa', department: 'Ddept', position: 'Fourth', phone: '0104444DDDD', approvedBy: 'Habced', approvedDate: 'March20' }
// ];
// const EVICTED_DATA: EvictedList[] = [
//   { id: 5, name: 'Mike', department: 'Edept', position: 'Fifth', phone: '0105555EEEE', evictedDate: 'Jan 4', reason: 'Did Not Work' },
//   { id: 6, name: 'Grace', department: 'Fdept', position: 'Sixth', phone: '0106666FFFF', evictedDate: 'March 23', reason: 'Slept At Work' }
// ];







