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

    // this.changeDatatoWaitList(this.getUserData(2));
    // this.changeDatatoWaitList(this.getUserData(2));
    // this.changeDatatoWaitList(this.getUserData(2));
    // this.changeDatatoWaitList(this.getUserData(2));
  }


  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();

  ngOnInit() {
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
