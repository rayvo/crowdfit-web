import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialogConfig, MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lesson-management',
  templateUrl: './lesson-management.component.html',
  styleUrls: ['./lesson-management.component.css'],
  providers: [UserService]
})
export class LessonManagementComponent implements OnInit, AfterViewInit {


  displayedColumns1: string[] = ['name', 'donghosu', 'phone', 'applyDate', 'expirationDate', 'classType', 'count', 'instructor', ];
  displayedColumns2: string[] = ['name', 'donghosu', 'phone', 'applyDate', 'expirationDate', 'classType', 'count', 'instructor', ];
  displayedColumns3: string[] = ['name', 'donghosu', 'phone', 'applyDate', 'expirationDate', 'classType', 'count', 'instructor', ];
  displayedColumns4: string[] = ['name', 'donghosu', 'phone', 'applyDate', 'expirationDate', 'classType', 'count', 'instructor', ];
  // displayedColumns5: string[] = ['instructor', 'name', 'phone', 'applyDate', 'expirationDate', 'classType',  ];
  memberWaitList: MyList[] = [];
  memberApprovedList: MyList[] = [];
  memberAlmostEndList: MyList[] = [];
  memberEndedList: MyList[] = [];
  // memberWaitList: MyList[] = [];
  dataSource1;
  dataSource2;
  dataSource3;
  dataSource4;
  // dataSource1;

  constructor(
    private dialog: MatDialog,
    private user: UserService
   ) {
    this.setMemberData(  1 /*TODO*/ );
    this.setMemberData(  1 /*TODO*/ );
    this.setMemberData(  1 /*TODO*/ );
    this.setMemberData(  1 /*TODO*/ );
    // this.setMemberData(  1 /*TODO*/ );
    this.dataSource1 = new MatTableDataSource<MyList>(this.memberWaitList);
    this.dataSource2 = new MatTableDataSource<MyList>(this.memberApprovedList);
    this.dataSource3 = new MatTableDataSource<MyList>(this.memberAlmostEndList);
    this.dataSource4 = new MatTableDataSource<MyList>(this.memberEndedList);
    // this.dataSource1 = new MatTableDataSource<MyList>(this.memberWaitList);
  }


  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  ngOnInit() {
    this.dataSource1.filterPredicate = ( data: MyList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };

    this.dataSource2.filterPredicate = ( data: MyList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };

    this.dataSource3.filterPredicate = ( data: MyList, filter: string ) => {
      return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
      data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    };

    this.dataSource4.filterPredicate = ( data: MyList, filter: string ) => {
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
    // this.dataSource5.paginator = this.paginator.toArray()[3];

  }


  // Only search names and numbers
  applyFilter(filterValue: string) {
    this.dataSource1.filter = filterValue.trim().toLowerCase();
    this.dataSource2.filter = filterValue.trim().toLowerCase();
    this.dataSource3.filter = filterValue.trim().toLowerCase();
    this.dataSource4.filter = filterValue.trim().toLowerCase();
    // this.dataSource5.filter = filterValue.trim().toLowerCase();
  }



  setMemberData( statusNumber ) {
    // console.log(statusNumber);
    // this.user.
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
    if ( newStatus === 1 ) {
      // TODO The applicant was not approved
    } else if ( newStatus === 2 ) {
    } else if ( newStatus === 3 ) {
    //  this.user.approveUser(personInfo.id).subscribe(
    //    data => {
    //      this.userWaitList = this.removeFromList(this.userWaitList, personInfo);
    //      personInfo.staff = 'Haseung'; // TODO
    //      personInfo.approvedDate = null; // 'today'; // TODO
    //      this.userApprovedList.push( personInfo );
    //      this.reloadAllData();
    //    },
    //    error => {

    //    }
    //  );
    } else if ( newStatus === 4 ) {
    } else if ( newStatus === 5 ) {
     // TODO an approved user that left or was evicted
    } else {
      console.log('There is an error');
    }

  }

  reloadAllData() {
    this.dataSource1 = new MatTableDataSource<MyList>(this.memberWaitList);
    this.dataSource2 = new MatTableDataSource<MyList>(this.memberApprovedList);
    this.dataSource3 = new MatTableDataSource<MyList>(this.memberAlmostEndList);
    this.dataSource4 = new MatTableDataSource<MyList>(this.memberEndedList);
    // this.dataSource5 = new MatTableDataSource<MyList>(this.userEvictedList);
    this.dataSource1.paginator = this.paginator.toArray()[0];
    this.dataSource2.paginator = this.paginator.toArray()[1];
    this.dataSource3.paginator = this.paginator.toArray()[2];
    this.dataSource4.paginator = this.paginator.toArray()[3];
    // this.dataSource5.paginator = this.paginator.toArray()[4];
  }

  removeFromList( myArray, myPerson ) {
    return myArray.filter(function(person) {
      return myPerson !== person;
    });
  }

}

export interface MyList {
  id: number;
  name: string;
  donghosu: string;
  phone: string;
  applyDate: Date;
  expirationDate: Date;
  classType: string;
  count: number;
  instructor: string;
}
