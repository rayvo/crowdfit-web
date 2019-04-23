import { Component, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { GRMPopupComponent } from './grm-popup.component';
import { GRMPopPaauComponent } from './grm-pop-paau.component';
import { GRMPopInviteComponent } from './grm-pop-invite.component';

@Component({
  selector: 'app-general-resident-management',
  templateUrl: './general-resident-management.component.html',
  styleUrls: ['./general-resident-management.component.css'],
  providers: [UserService]
})
export class GeneralResidentManagementComponent implements OnInit, AfterViewInit {

  /*
   * /api/status/
   * if ( id == 1 ) { applying }
   * if ( id == 2 ) { waiting }
   * if ( id == 3 ) { approved }
   * if ( id == 4 ) { applied for 퇴거 }
   * if ( id == 5 ) { evicted }
   *
   */

  displayedColumns1: string[] = ['name', 'donghosu', 'phone' ];
  displayedColumns2: string[] = ['name', 'donghosu', 'phone' ];
  displayedColumns3: string[] = ['name', 'donghosu', 'phone', 'staff', 'approvedDate' ];
  displayedColumns4: string[] = ['name', 'donghosu', 'phone', 'staff' ]; // , 'outDate' ];
  userWaitList: WaitList[] = [];
  userInvitedList: InvitedList[] = [];
  userApprovedList: ApprovedList[] = [];
  userEvictedList: EvictedList[] = [];
  dataSource1;
  dataSource2;
  dataSource3;
  dataSource4;


  constructor(
    private dialog: MatDialog,
    private user: UserService,
  ) {
    this.setUserData(2);
    // this.changeDatatoInvitedList(this.getUserData(__));
    this.setUserData(3);
    this.setUserData(5);
    this.dataSource1 = new MatTableDataSource<WaitList>(this.userWaitList);
    this.dataSource2 = new MatTableDataSource<InvitedList>(this.userInvitedList);
    this.dataSource3 = new MatTableDataSource<ApprovedList>(this.userApprovedList);
    this.dataSource4 = new MatTableDataSource<EvictedList>(this.userEvictedList);
  }


  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

  // Filtering by only name and phone
  ngOnInit() {
    this.dataSource1.filterPredicate = ( data: WaitList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };

    this.dataSource2.filterPredicate = ( data: InvitedList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };

    this.dataSource3.filterPredicate = ( data: ApprovedList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };

    this.dataSource4.filterPredicate = ( data: EvictedList, filter: string ) => {
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
    this.dataSource4.paginator = this.paginator.toArray()[3];
  }

  // Only search names and numbers
  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
    this.dataSource2.filter = filterValue.trim().toLowerCase();
    this.dataSource3.filter = filterValue.trim().toLowerCase();
    this.dataSource4.filter = filterValue.trim().toLowerCase();
  }


  setUserData( statusNum ) {
    this.user.getUsersByStatus( localStorage.getItem('aptId'), statusNum ).subscribe(
      data => {

        if ( statusNum === 2 ) {
          data.results.forEach(element => {
            this.userWaitList.push({
              id: element.user_id,
              name: element.fullname,
              donghosu: element.address_dong + '동 ' + element.household_number + '호',
              phone: element.phone,
            });
          });
        } else if ( statusNum === 3 ) {
          data.results.forEach(element => {
            this.userApprovedList.push({
              id: element.user_id,
              name: element.fullname,
              donghosu: element.address_dong + '동 ' + element.household_number + '호',
              phone: element.phone,
              staff: element.staff,
              approvedDate: new Date(Date.parse(element.last_update)),
            });
          });
        } else if ( statusNum === 5 ) {
          data.results.forEach(element => {
            this.userEvictedList.push({
              id: element.user_id,
              name: element.fullname,
              donghosu: element.address_dong + '동 ' + element.household_number + '호',
              phone: element.phone,
              staff: element.staff,
            });
          });

        }
      }
    );
  }



  openDialog( personInfo: any, btnType: any, newStatus: any, ) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.data = {
      name: personInfo.name,
      donghosu: personInfo.donghosu,
      phone: personInfo.phone,
      type: btnType,
    };

    const dialogRef = this.dialog.open(GRMPopupComponent, dialogConfig );

    dialogRef.afterClosed().subscribe(
      result => {
        if ( result !== '' ) {
          this.updateUserStatus(personInfo, newStatus);
          this.reloadAllData();
        } // else canceled so do nothing
      },
      error => {
        console.log(error);
      }
    );

  }

  updateUserStatus( personInfo, newStatus ) {
    if ( newStatus === 1 ) {
       // TODO The applicant was not approved
    } else if ( newStatus === 3 ) {
      this.user.approveUser(personInfo.id).subscribe(
        data => {
          this.userWaitList = this.removeFromList(this.userWaitList, personInfo);
          personInfo.staff = 'Haseung'; // TODO
          personInfo.approvedDate = null; // 'today'; // TODO
          this.userApprovedList.push( personInfo );
          this.reloadAllData();
        },
        error => {

        }
      );
    } else if ( newStatus === 5 ) {
      // TODO an approved user that left or was evicted
    } else {
      console.log('There is an error');
    }
  }



  reloadAllData() {
    this.dataSource1 = new MatTableDataSource<WaitList>(this.userWaitList);
    this.dataSource2 = new MatTableDataSource<InvitedList>(this.userInvitedList);
    this.dataSource3 = new MatTableDataSource<ApprovedList>(this.userApprovedList);
    this.dataSource4 = new MatTableDataSource<EvictedList>(this.userEvictedList);
    this.dataSource1.paginator = this.paginator.toArray()[0];
    this.dataSource2.paginator = this.paginator.toArray()[1];
    this.dataSource3.paginator = this.paginator.toArray()[2];
    this.dataSource4.paginator = this.paginator.toArray()[3];
  }


  showFile() {

  }

  removeFromList( myArray, myPerson ) {
    return myArray.filter(function(person) {
      return myPerson !== person;
    });
  }

  personallyApproveAUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    const dialogRef = this.dialog.open(GRMPopPaauComponent, dialogConfig );

    dialogRef.afterClosed().subscribe(
      result => {
        if ( result !== '' ) {
          this.updateUserStatus(result, 3);
          this.reloadAllData();
        } // else canceled so do nothing
      },
      error => {
        console.log(error);
      }
    );
  }

  inviteDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    const dialogRef = this.dialog.open(GRMPopInviteComponent, dialogConfig );

    dialogRef.afterClosed().subscribe(
      result => {
        // Invite the resident
      },
      error => {
        console.log(error);
      }
    );
  }

}


export interface WaitList {
  id: number;
  name: string;
  donghosu: string;
  phone: string;
}

export interface InvitedList {
  id: number;
  name: string;
  donghosu: string;
  phone: string;
}


export interface ApprovedList {
  id: number;
  name: string;
  donghosu: string;
  phone: string;
  staff: string;
  approvedDate: Date;
}

export interface EvictedList {
  id: number;
  name: string;
  donghosu: string;
  phone: string;
  staff: string;
}

