import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDividerModule, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

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
  img: string;
  at: string;
  class: string;
  status: string;
}

const FAKE_DATA: AData[] = [
  { name: '손동민', img: '/assets/images/profile/p1.jpg' ,
    at: 'QR', class: 'Cycling', status: 'color1'  },
  { name: '구현식', img: '/assets/images/profile/p2.jpg' ,
    at: 'Smart Band', class: 'Pilates', status: 'color2'  },
  { name: '홍예은', img: '/assets/images/profile/p3.jpg' ,
    at: 'QR', class: 'Zumba', status: 'color3'  },
  { name: '관재원', img: '/assets/images/profile/p4.jpg' ,
    at: 'Desk', class: 'DanceSports', status: 'color4'   },
  { name: '백주영', img: '/assets/images/profile/p5.jpg' ,
    at: 'QR', class: 'Cycling', status: 'color5'   },
  { name: '남궁희', img: '/assets/images/profile/p6.jpg' ,
    at: 'QR', class: 'Cycling', status: 'color6'   },
  { name: '양희찬', img: '/assets/images/profile/p7.jpg' ,
    at: 'Desk', class: 'Zumba', status: 'color6'   },
  { name: '김재석', img: '/assets/images/profile/p8.jpg' ,
    at: 'QR', class: 'Cycling', status: 'color3'   },
  { name: '김찬호', img: '/assets/images/profile/p9.jpg'  ,
    at: 'QR', class: 'Zumba', status: 'color1'   },
  { name: '이지호', img: '/assets/images/profile/p10.jpg' ,
    at: 'Desk', class: 'Cycling', status: 'color5'   },
  { name: '오수정', img: '/assets/images/profile/p11.jpg'  ,
    at: 'Smart Band', class: 'Cycling', status: 'color1'   },
  { name: 'John Smith', img: '/assets/images/profile/p12.jpg'  ,
    at: 'QR', class: 'Cycling', status: 'color6' },
  { name: '신민희', img: '/assets/images/profile/p13.jpg'  ,
    at: 'QR', class: 'Pilates', status: 'color6'   },
  { name: '박성준', img: '/assets/images/profile/p14.jpg'  ,
    at: 'QR', class: 'Cycling', status: 'color1'   },
  { name: '김찬송', img: '/assets/images/profile/p15.jpg'  ,
    at: 'Desk', class: 'Zumba', status: 'color2'   },
  { name: '최주희', img: '/assets/images/profile/p16.jpg'  ,
    at: 'QR', class: 'Pilates', status: 'color3'   },
  { name: '임보석', img: '/assets/images/profile/p17.jpg'  ,
    at: 'QR', class: 'Zumba', status: 'color1'   },
  { name: '안태원', img: '/assets/images/profile/p18.jpg'  ,
    at: 'QR', class: 'Pilates', status: 'color2'   },
  { name: '하대경', img: '/assets/images/profile/p19.jpg'  ,
    at: 'QR', class: 'Cycling', status: 'color1'   },
  { name: 'Rebecca Taylor', img: '/assets/images/profile/p20.jpg'  ,
    at: 'QR', class: 'Pilates', status: 'color1' },
  { name: '권일철', img: '/assets/images/profile/p21.jpg'  ,
    at: 'Smart Band', class: 'Cycling', status: 'color4'   },
  { name: '윤효정', img: '/assets/images/profile/p22.jpg'  ,
    at: 'Smart Band', class: 'Cycling', status: 'color6'   },
  { name: '하일성', img: '/assets/images/profile/p23.jpg' ,
    at: 'QR', class: 'Pilates', status: 'color1'   },
  { name: '박나라', img: '/assets/images/profile/p24.jpg'  ,
    at: 'QR', class: 'Cycling', status: 'color2'   },
  { name: '황지원', img: '/assets/images/profile/p25.jpg'  ,
    at: 'Desk', class: 'Cycling', status: 'color5'   },
  { name: '김주영', img: '/assets/images/profile/p26.jpg'  ,
    at: 'QR', class: 'Zumba', status: 'color1'   },
];


@Component({
  selector: 'app-attendence-management',
  templateUrl: './attendence-management.component.html',
  styleUrls: ['./attendence-management.component.css'],
  providers: [UserService]
})
export class AttendenceManagementComponent implements OnInit {

  cols = [0, 1, 2, 3, 4, ];
  rows = [0, 5, 10, 15, 20, ];

  interval: any;


  // TODO change from fake data to real data
  attendenceList: AData[] = FAKE_DATA;
  filterNumber;
  filteredAList: AData[] = [];

  attendences: Attendance[] = [
    { value: 0, viewValue: '전체' },
    { value: 1, viewValue: '회원권만료예정' },
    { value: 2, viewValue: '락커기간만료예정' },
    { value: 3, viewValue: '신규회원' },
    { value: 4, viewValue: '만료회원' },
    { value: 5, viewValue: '클래스타임오버체크' },
    { value: 6, viewValue: '휴회회원입장' }
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
    // this.getAttendanceData();
    this.filterAndReloadTable( 0, 0 );
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {

  }

  getAttendanceData() {
    this.user.getAttendanceData().subscribe(
      data => {

      },
      error => {
        console.log(error);
      }
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


