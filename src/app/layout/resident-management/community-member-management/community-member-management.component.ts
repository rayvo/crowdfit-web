import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialogConfig, MatPaginator, MatDialog, MatTableDataSource } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { CMMPopPaamComponent } from './cmm-pop-paam.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-community-member-management',
  templateUrl: './community-member-management.component.html',
  styleUrls: ['./community-member-management.component.css'],
  providers: [UserService, DatePipe]
})
export class CommunityMemberManagementComponent implements OnInit, AfterViewInit {

  displayedColumns1: string[] = ['name', /*'donghosu',*/ 'phone', 'classType', 'applyDate',  ];
  displayedColumns2: string[] = ['name', /*'donghosu',*/ 'phone', 'classType', 'startDate', 'ticketType' ];
  displayedColumns3: string[] = ['name', /*'donghosu',*/ 'phone', 'classType', 'startDate', 'ticketType' ];
  displayedColumns4: string[] = ['name', /*'donghosu',*/ 'phone', 'classType', 'startDate', 'ticketType' ];
  memberWaitList: WaitList[] = [];
  memberApprovedList: ApprovedList[] = [];
  memberAlmostEndList: AlmostEndList[] = [];
  memberEndedList: EndedList[] = [];
  dataSource1;
  dataSource2;
  dataSource3;
  dataSource4;

  constructor(
    private dialog: MatDialog,
    private user: UserService,
    private datePipe: DatePipe
  ) {
    this.setMemberData();
    // this.setMemberData(__);
    // this.setMemberData(3);
    // this.setMemberData(5);
    this.dataSource1 = new MatTableDataSource<WaitList>(this.memberWaitList);
    this.dataSource2 = new MatTableDataSource<ApprovedList>(this.memberApprovedList);
    this.dataSource3 = new MatTableDataSource<AlmostEndList>(this.memberAlmostEndList);
    console.log(this.dataSource4);
    this.dataSource4 = new MatTableDataSource<EndedList>(this.memberEndedList);
  }

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  ngOnInit() {
    this.dataSource1.filterPredicate = ( data: WaitList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };

    this.dataSource2.filterPredicate = ( data: ApprovedList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };

    this.dataSource3.filterPredicate = ( data: AlmostEndList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };

    this.dataSource4.filterPredicate = ( data: EndedList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };
    // this.interval = setInterval(() => {
    //   this.userWaitList = [];
    //   this.userInvitedList = [];
    //   this.userApprovedList = [];
    //   this.userEvictedList = [];
    //   this.setUserData(2);
    //   this.setUserData(3);
    //   this.setUserData(5);
    // }, (5 * 60 * 1000) );
  }

  // ngOnDestroy(): void {
  //   clearInterval(this.interval);
  // }

  ngAfterViewInit(): void {
    // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    // Add 'implements AfterViewInit' to the class.
    this.dataSource1.paginator = this.paginator.toArray()[0];
    this.dataSource2.paginator = this.paginator.toArray()[1];
    this.dataSource3.paginator = this.paginator.toArray()[2];
    this.dataSource4.paginator = this.paginator.toArray()[3];
  }

  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
    this.dataSource2.filter = filterValue.trim().toLowerCase();
    this.dataSource3.filter = filterValue.trim().toLowerCase();
    this.dataSource4.filter = filterValue.trim().toLowerCase();
  }


  setMemberData() {
    console.log('setMemberData REACHED');
    this.user.getTicketsByApt().subscribe(
      data => {
        console.log('data REACHED');
        console.log('printing data');
        console.log(data);
        for ( const item of data.results ) {
          console.log('printing item');
          console.log(item);
          this.user.getUser( item.user_id ).subscribe(
            myData => {
              console.log('myData REACHED');
              console.log(myData);

              // https://stackoverflow.com/questions/53538894/typescript-find-date-difference-in-dates-hours-minutes
              console.log('Calculating difference in date' );

              const myStartMonth = new Date(item.start_date).getMonth();
              const myCurrentMonth = new Date().getMonth(); // '2019-07-17'
              let monthsSince = 0;
              const myStartDate = new Date(item.start_date).getDate();
              const myCurrentDate = new Date().getDate(); // '2019-07-17')
              let daysSince = 0;
              const myTicketDays = item.ticket_type * 30;
              if ( myCurrentMonth === myStartMonth ) {
                // monthsSince = 0;
                daysSince = myCurrentDate - myStartDate;
              } else if ( myCurrentMonth > myStartMonth ) {
                monthsSince = myCurrentMonth - myStartMonth;
                daysSince = 30 - myStartDate + myCurrentDate;
              } else { // <
                monthsSince = 12 - myStartMonth + myCurrentMonth;
                daysSince = 30 - myStartDate + myCurrentDate;
              }

              const daysLeft = myTicketDays - ((monthsSince - 1) * 30) - daysSince  ;
              console.log('myStartDate');
              console.log(myStartDate);
              console.log('myCurrentDate');
              console.log(myCurrentDate);
              console.log('monthsSince');
              console.log(monthsSince);
              console.log('daysSince');
              console.log(daysSince);
              // // // Calculate ticket type's number of days
              console.log('myTicketDays');
              console.log(myTicketDays);
              console.log('daysLeft');
              console.log(daysLeft);

              let myClassType = '';
              if ( item.aptclass === 1 ) {
                myClassType = 'Cycling';
              } else if ( item.aptclass === 2 ) {
                myClassType = 'Zumba';
              } else { // ===3 => Pilates
                myClassType = 'Pilates';
              }
              let myTicketType = '';
              if ( item.ticket_type === 1 ) {
                myTicketType = '30 Days';
              } else if ( item.ticket_type === 2 ) {
                myTicketType = '60 Days';
              } else if ( item.ticket_type === 3 ) {
                myTicketType = '90 Days';
              } else if ( item.ticket_type === 6 ) {
                myTicketType = '180 Days';
              }

              if ( daysLeft > 7 ) {
                console.log( 'More than 7 days left' );
                this.memberApprovedList.push({
                  id: item.id,
                  name: myData.fullname,
                  phone: myData.phone,
                  classType: myClassType,
                  startDate: item.start_date,
                  ticketType: myTicketType
                });
              } else if ( daysLeft >= 0 ) {
                console.log( 'Less than 7 days left' );
                this.memberAlmostEndList.push({
                  id: item.id,
                  name: myData.fullname,
                  phone: myData.phone,
                  classType: myClassType,
                  startDate: item.start_date,
                  ticketType: myTicketType
                });
              } else {
                console.log( 'Ticket Ended' );
                this.memberEndedList.push({
                  id: item.id,
                  name: myData.fullname,
                  phone: myData.phone,
                  classType: myClassType,
                  startDate: item.start_date,
                  ticketType: myTicketType
                });
              }
              this.reloadAllData();

            },
            error => {
              console.log(error);
            }
          );
        }
        this.reloadAllData();
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
      donghosu: personInfo.donghosu,
      phone: personInfo.phone,
      type: btnType,
    };

    // const dialogRef = this.dialog.open(GRMPopupComponent, dialogConfig );

    // dialogRef.afterClosed().subscribe(
    //   result => {
    //     if ( result !== '' ) {
    //       this.updateUserStatus(personInfo, newStatus);
    //       this.reloadAllData();
    //     } // else canceled so do nothing
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );

  }

  updateMemberStatus( personInfo, newStatus ) {

  }

  reloadAllData() {
    this.dataSource1 = new MatTableDataSource<WaitList>(this.memberWaitList);
    this.dataSource2 = new MatTableDataSource<ApprovedList>(this.memberApprovedList);
    this.dataSource3 = new MatTableDataSource<AlmostEndList>(this.memberAlmostEndList);
    this.dataSource4 = new MatTableDataSource<EndedList>(this.memberEndedList);
    this.dataSource1.paginator = this.paginator.toArray()[0];
    this.dataSource2.paginator = this.paginator.toArray()[1];
    this.dataSource3.paginator = this.paginator.toArray()[2];
    this.dataSource4.paginator = this.paginator.toArray()[3];
  }



  removeFromList( myArray, myPerson ) {
    return myArray.filter(function(person) {
      return myPerson !== person;
    });
  }


  personallyApproveAMember() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    const dialogRef = this.dialog.open(CMMPopPaamComponent, dialogConfig );

    dialogRef.afterClosed().subscribe(
      result => {
        console.log(result);
        if ( result !== '' ) {
          this.memberWaitList = [];
          this.memberApprovedList = [];
          this.memberAlmostEndList = [];
          this.memberEndedList = [];
          this.setMemberData();
          this.reloadAllData();
        } // else canceled so do nothing
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
  // donghosu: string;
  phone: string;
  classType: string;
  applyDate: Date;
  // type of payment
}
// displayedColumns1: string[] = ['name', /*'donghosu',*/ 'phone', 'classType', 'applyDate',  ];
// displayedColumns2: string[] = ['name', /*'donghosu',*/ 'phone', 'classType', 'startDate', 'ticketType' ];
// displayedColumns3: string[] = ['name', /*'donghosu',*/ 'phone', 'classType', 'startDate', 'ticketType' ];
// displayedColumns4: string[] = ['name', /*'donghosu',*/ 'phone', 'classType', 'startDate', 'ticketType' ];

export interface ApprovedList {
  id: number;
  name: string;
  // donghosu: string;
  phone: string;
  classType: string;
  startDate: string;
  ticketType: string;
  // type of payment
}

export interface AlmostEndList {
  id: number;
  name: string;
  // donghosu: string;
  phone: string;
  classType: string;
  startDate: string;
  ticketType: string;
}

// export interface CancelRequestList {
//   id: number
// }

export interface EndedList {
  id: number;
  name: string;
  // donghosu: string;
  phone: string;
  classType: string;
  startDate: string;
  ticketType: string;
}
