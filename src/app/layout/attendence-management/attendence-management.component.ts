import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatDividerModule, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';
import { template } from '@angular/core/src/render3';

export interface Attendance {
  value: number;
  viewValue: string;
}

export interface Class {
  value: number;
  viewValue: string;
}

export interface AData {
  name: string;
  img?: HTMLImageElement;
  at: string;
  class: string;
  status: string;
}

// const FAKE_DATA: AData[] = [
//   { name: '손동민', img: '/assets/images/profile/p1.jpg' ,
//     at: 'QR', class: 'Cycling', status: 'color1'  },
//   { name: '구현식', img: '/assets/images/profile/p2.jpg' ,
//     at: 'Smart Band', class: 'Pilates', status: 'color2'  },
//   { name: '홍예은', img: '/assets/images/profile/p3.jpg' ,
//     at: 'QR', class: 'Zumba', status: 'color3'  },
//   { name: '관재원', img: '/assets/images/profile/p4.jpg' ,
//     at: 'Desk', class: 'Zumba', status: 'color2'   },
//   { name: '백주영', img: '/assets/images/profile/p5.jpg' ,
//     at: 'QR', class: 'Cycling', status: 'color3'   },
//   { name: '남궁희', img: '/assets/images/profile/p6.jpg' ,
//     at: 'QR', class: 'Cycling', status: 'color1'   },
//   { name: '양희찬', img: '/assets/images/profile/p7.jpg' ,
//     at: 'Desk', class: 'Zumba', status: 'color2'   },
//   { name: '김재석', img: '/assets/images/profile/p8.jpg' ,
//     at: 'QR', class: 'Cycling', status: 'color3'   },
//   { name: '김찬호', img: '/assets/images/profile/p9.jpg'  ,
//     at: 'QR', class: 'Zumba', status: 'color1'   },
//   { name: '이지호', img: '/assets/images/profile/p10.jpg' ,
//     at: 'Desk', class: 'Cycling', status: 'color1'   },
//   { name: '오수정', img: '/assets/images/profile/p11.jpg'  ,
//     at: 'Smart Band', class: 'Cycling', status: 'color1'   },
//   { name: 'John Smith', img: '/assets/images/profile/p12.jpg'  ,
//     at: 'QR', class: 'Cycling', status: 'color1' },
//   { name: '신민희', img: '/assets/images/profile/p13.jpg'  ,
//     at: 'QR', class: 'Pilates', status: 'color2'   },
//   { name: '박성준', img: '/assets/images/profile/p14.jpg'  ,
//     at: 'QR', class: 'Cycling', status: 'color1'   },
//   { name: '김찬송', img: '/assets/images/profile/p15.jpg'  ,
//     at: 'Desk', class: 'Zumba', status: 'color2'   },
//   { name: '최주희', img: '/assets/images/profile/p16.jpg'  ,
//     at: 'QR', class: 'Pilates', status: 'color3'   },
//   { name: '임보석', img: '/assets/images/profile/p17.jpg'  ,
//     at: 'QR', class: 'Zumba', status: 'color1'   },
//   { name: '안태원', img: '/assets/images/profile/p18.jpg'  ,
//     at: 'QR', class: 'Pilates', status: 'color2'   },
//   { name: '하대경', img: '/assets/images/profile/p19.jpg'  ,
//     at: 'QR', class: 'Cycling', status: 'color1'   },
//   { name: 'Rebecca Taylor', img: '/assets/images/profile/p20.jpg'  ,
//     at: 'QR', class: 'Pilates', status: 'color1' },
//   { name: '권일철', img: '/assets/images/profile/p21.jpg'  ,
//     at: 'Smart Band', class: 'Cycling', status: 'color3'   },
//   { name: '윤효정', img: '/assets/images/profile/p22.jpg'  ,
//     at: 'Smart Band', class: 'Cycling', status: 'color2'   },
//   { name: '하일성', img: '/assets/images/profile/p23.jpg' ,
//     at: 'QR', class: 'Pilates', status: 'color1'   },
//   { name: '박나라', img: '/assets/images/profile/p24.jpg'  ,
//     at: 'QR', class: 'Cycling', status: 'color2'   },
//   { name: '황지원', img: '/assets/images/profile/p25.jpg'  ,
//     at: 'Desk', class: 'Cycling', status: 'color1'   },
//   { name: '김주영', img: '/assets/images/profile/p26.jpg'  ,
//     at: 'QR', class: 'Zumba', status: 'color1'   },
// ];


@Component({
  selector: 'app-attendence-management',
  templateUrl: './attendence-management.component.html',
  styleUrls: ['./attendence-management.component.css'],
  providers: [UserService]
})
export class AttendenceManagementComponent implements OnInit, OnDestroy {

  cols = [0, 1, 2, 3, 4, ];
  rows = [0, 5, 10, 15, 20, ];

  interval: any;

  // imgBlub;

  // TODO change from fake data to real data
  attendenceList: AData[] = []; // = FAKE_DATA;
  filterNumber;
  filteredAList: AData[] = [];

  // attendences: Attendance[] = [
  //   { value: 0, viewValue: '전체' },
  //   { value: 1, viewValue: '회원권만료예정' },
  //   { value: 2, viewValue: '락커기간만료예정' },
  //   { value: 3, viewValue: '신규회원' },
  //   { value: 4, viewValue: '만료회원' },
  //   { value: 5, viewValue: '클래스타임오버체크' },
  //   { value: 6, viewValue: '휴회회원입장' }
  // ];
  attendences: Attendance[] = [
    { value: 0, viewValue: '전체' },
    { value: 1, viewValue: '회원' },
    { value: 2, viewValue: '회원권만료예정' },
    { value: 3, viewValue: '만료회원' },
  ];

  classes: Class[] = [
    { value: 0, viewValue: 'All' },
    { value: 1, viewValue: 'Cycling' },
    { value: 2, viewValue: 'Pilates' },
    { value: 3, viewValue: 'Zumba' },
    // { value: 4, viewValue: 'DanceSports' },
    // { value: 5, viewValue: 'Yoga' },
    // { value: 6, viewValue: 'Stretching' },
    // { value: 7, viewValue: 'PT' },
  ];

  selectedC = 0;
  selectedA = 0;

  constructor(
    private dialog: MatDialog,
    private user: UserService
  ) {
    this.getAttendanceData();
    this.filterAndReloadTable( 0, 0 );
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.attendenceList = [];
      this.getAttendanceData();
      this.filterAndReloadTable( this.selectedA, this.selectedC);
    }, (5 * /*60 * */ 1000) );
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  getAttendanceData() {
    this.user.getAttendanceData().subscribe(
      atData => {
        console.log('atData REACHED');
        console.log('printing atData');
        console.log(atData);
        atData.results.forEach(element => {
          console.log('printing element');
          console.log(element);

          const diffInMs = new Date().valueOf() - new Date(element.last_update).valueOf();
          const diffInSecs = Math.floor(diffInMs / 1000);
          console.log(diffInSecs);
          if ( diffInSecs < 5/* 90 */ ) {
            this.user.getUser( element.user_id ).subscribe(
              userData => {
                console.log('printing userData');
                console.log(userData);
                this.user.getTicketsByUser( element.user_id).subscribe(
                  ticketListData => {
                    console.log('printing ticketListData');
                    console.log(ticketListData);
                    for (const item of ticketListData.results) {
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

                      // Parse Image URL
                      const splitted = userData.user_avatar.split('/');
                      // splitted = ["http:", "", "210.105.48.120:8001", "media", "pictures", "default.jpg"]
                      // i need splitted[4] for file name
                      // console.log(splitted);
                      console.log( 'splitted[splitted.length - 1] is: ' + splitted[splitted.length - 1] );
                      this.user.getMedia(splitted[splitted.length - 1]).subscribe(
                        imgReturn => {
                          let imgBlub;
                          const reader = new FileReader();
                          reader.readAsDataURL(imgReturn);
                          reader.onloadend = (e) => {
                            // console.log(reader.result);
                            // temp = reader.result;
                            // console.log(temp);
                            // return temp;
                            imgBlub = reader.result;
                            if ( daysLeft > 7 ) {
                              console.log( 'More than 7 days left' );
                              this.attendenceList.push({
                                img: imgBlub,
                                name: userData.fullname,
                                at: 'SmartBand',
                                class: myClassType,
                                status: 'color1'
                              });
                            } else if ( daysLeft >= 0 ) {
                              console.log( 'Less than 7 days left' );
                              this.attendenceList.push({
                                img: imgBlub,
                                name: userData.fullname,
                                at: 'SmartBand',
                                class: myClassType,
                                status: 'color2'
                              });
                            } else {
                              console.log( 'Ticket Ended' );
                              this.attendenceList.push({
                                img: imgBlub,
                                name: userData.fullname,
                                at: 'SmartBand',
                                class: myClassType,
                                status: 'color3'
                              });
                            }
                            this.filterAndReloadTable(this.selectedA, this.selectedC);
                          };


                          // if ( daysLeft > 7 ) {
                          //   console.log( 'More than 7 days left' );
                          //   this.attendenceList.push({
                          //     img: imgBlub,
                          //     name: userData.fullname,
                          //     at: 'SmartBand',
                          //     class: myClassType,
                          //     status: 'color1'
                          //   });
                          //   console.log(this.attendenceList);

                          // } else if ( daysLeft >= 0 ) {
                          //   console.log( 'Less than 7 days left' );
                          //   this.attendenceList.push({
                          //     img: imgBlub,
                          //     name: userData.fullname,
                          //     at: 'SmartBand',
                          //     class: myClassType,
                          //     status: 'color2'
                          //   });
                          // } else {
                          //   console.log( 'Ticket Ended' );
                          //   this.attendenceList.push({
                          //     img: imgBlub,
                          //     name: userData.fullname,
                          //     at: 'SmartBand',
                          //     class: myClassType,
                          //     status: 'color3'
                          //   });
                          // }


                        }, error => { console.log(error); }
                      );
                    }
                  }, error => { console.log(error); }
                );
              }, error => { console.log(error); }
            );
          }
        });
      }, error => { console.log(error); }
    );
  }


  filterAndReloadTable( a, c ) {
    this.selectedA = a;
    this.selectedC = c;
    this.filteredAList = [];
    if ( a === 0  && c === 0 ) {
      this.filteredAList = this.attendenceList;
    } else if ( c === 0 ) {
      for ( const p of this.attendenceList ) {
        if ( p.status === 'color' + a ) {
          this.filteredAList.push(p);
        }
      }
    } else if ( a === 0 ) {
      for ( const p of this.attendenceList ) {
        if ( p.class === this.classes[c].viewValue ) {
          this.filteredAList.push(p);
        }
      }
    } else {
      for ( const p of this.attendenceList ) {
        if ( p.status === 'color' + a && p.class === this.classes[c].viewValue) {
          this.filteredAList.push(p);
        }
      }
    }
  }

}


