import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialogConfig, MatPaginator, MatDialog, MatTableDataSource } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { CMMPopPaamComponent } from './cmm-pop-paam.component';

@Component({
  selector: 'app-community-member-management',
  templateUrl: './community-member-management.component.html',
  styleUrls: ['./community-member-management.component.css'],
  providers: [UserService]
})
export class CommunityMemberManagementComponent implements OnInit, AfterViewInit {

  displayedColumns1: string[] = ['name', 'donghosu', 'phone', 'applyDate', 'classType' ];
  displayedColumns2: string[] = ['name', 'donghosu', 'phone', 'approveDate', 'staff', 'classType' ];
  displayedColumns3: string[] = ['name', 'donghosu', 'phone', 'typeOfUser' ];
  displayedColumns4: string[] = ['name', 'donghosu', 'phone', 'classType', 'endDate' ];
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
  ) {
    this.setMemberData(2);
    // this.setMemberData(__);
    this.setMemberData(3);
    this.setMemberData(5);
    this.dataSource1 = new MatTableDataSource<WaitList>(this.memberWaitList);
    this.dataSource2 = new MatTableDataSource<ApprovedList>(this.memberApprovedList);
    this.dataSource3 = new MatTableDataSource<AlmostEndList>(this.memberAlmostEndList);
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

  }



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

  setMemberData( statusNum ) {
    // this.user.getUsersByStatus( localStorage.getItem('aptId'), statusNum ).subscribe(
    //   data => {

    //     if ( statusNum === 2 ) {
    //       data.results.forEach(element => {
    //         this.userWaitList.push({
    //           id: element.user_id,
    //           name: element.fullname,
    //           donghosu: element.address_dong + '동 ' + element.household_number + '호',
    //           phone: element.phone,
    //         });
    //       });
    //     } else if ( statusNum === 3 ) {
    //       data.results.forEach(element => {
    //         this.userApprovedList.push({
    //           id: element.user_id,
    //           name: element.fullname,
    //           donghosu: element.address_dong + '동 ' + element.household_number + '호',
    //           phone: element.phone,
    //           staff: element.staff,
    //           approvedDate: new Date(Date.parse(element.last_update)),
    //         });
    //       });
    //     } else if ( statusNum === 5 ) {
    //       data.results.forEach(element => {
    //         this.userEvictedList.push({
    //           id: element.user_id,
    //           name: element.fullname,
    //           donghosu: element.address_dong + '동 ' + element.household_number + '호',
    //           phone: element.phone,
    //           staff: element.staff,
    //         });
    //       });

    //     }
    //   }
    // );
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
        if ( result !== '' ) {
          this.updateMemberStatus(result, 3);
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
  donghosu: string;
  phone: string;
  applyDate: Date;
  // type of payment
  classType: string;
}

export interface ApprovedList {
  id: number;
  name: string;
  donghosu: string;
  phone: string;
  approveDate: Date;
  staff: string;
  // type of payment
  classType: string;
}

export interface AlmostEndList {
  id: number;
  name: string;
  donghosu: string;
  phone: string;
  // cancel button
  // resend button;
  typeOfUser: string;
}

// export interface CancelRequestList {
//   id: number
// }

export interface EndedList {
  id: number;
  name: string;
  donghosu: string;
  phone: string;
  classType: string;
  endDate: Date;
  // another end date?
  // rating
}
