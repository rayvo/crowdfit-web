import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialog, MatPaginator } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-general-resident-management',
  templateUrl: './general-resident-management.component.html',
  styleUrls: ['./general-resident-management.component.css']
})
export class GeneralResidentManagementComponent implements OnInit {

  /*
   * /api/status/
   * if ( id == 1 ) { applying }
   * if ( id == 2 ) { waiting }
   * if ( id == 3 ) { approved }
   * if ( id == 4 ) { applied for 퇴거 }
   * if ( id == 5 ) { evicted }
   *
   */

  displayedColumns1: string[] = ['name', 'donghosu', 'phone'];
  displayedColumns2: string[] = ['name', 'donghosu', 'phone', 'staff'];
  displayedColumns3: string[] = ['name', 'donghosu', 'phone', 'staff'];
  displayedColumns4: string[] = ['name', 'donghosu', 'phone', 'inviteStatus', 'reinviteStatus', 'inviteType'];
  displayedColumns5: string[] = ['name', 'donghosu', 'phone', 'approvedStatus'];
  userWaitList: WaitList[];
  userApprovedList: ApprovedList[];
  userEvictedList: EvictedList[];
  userInvitedList: InvitedList[];
  userPersonallyApprovedList: PersonallyApprovedList[];
  dataSource1;
  dataSource2;
  dataSource3;
  dataSource4;
  dataSource5;

  constructor(
    private dialog: MatDialog,
    private user: UserService,
  ) {
    this.changeDatatoWaitList(this.getUserData(2));
    this.changeDatatoApprovedList(this.getUserData(3));
    this.changeDatatoEvictedList(this.getUserData(5));
    // this.changeDatatoWaitList(this.getUserData(2));
    // this.changeDatatoWaitList(this.getUserData(2));
  }


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


  getUserData( statusNum ) {
    this.user.getUsersByStatus( localStorage.getItem('aptId'), statusNum ).subscribe(
      data => {
        return data;
      },
      error => {
        console.log(error);
      }
    );
  }


  changeDatatoWaitList( data ) {
    data.forEach(element => {

    });
  }

  changeDatatoApprovedList( data ) {
    data.forEach(element => {

    });
  }

  changeDatatoEvictedList( data ) {
    data.forEach(element => {

    });
  }

  changeDatatoInvitedList( data ) {
    data.forEach(element => {

    });
  }

  changeDatatoPersonallyApprovedList( data ) {
    data.forEach(element => {

    });
  }

}


export interface WaitList {
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
}

export interface EvictedList {
  id: number;
  name: string;
  donghosu: string;
  phone: string;
  staff: string;
}

export interface InvitedList {
  id: number;
  name: string;
  donghosu: string;
  phone: string;
  inviteStatus: string;
  reinviteStatus: string;
  inviteType: string;
}

export interface PersonallyApprovedList {
  id: number;
  name: string;
  donghosu: string;
  phone: string;
  approvedStatus: string;
}
