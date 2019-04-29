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
  { name: '손동민', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' ,
    at: 'QR', class: 'Cycling', status: 'color1'  },
  { name: '구현식', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' ,
    at: 'Smart Band', class: 'Pilates', status: 'color2'  },
  { name: '홍예은', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' ,
    at: 'QR', class: 'Zumba', status: 'color3'  },
  { name: '관재원', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' ,
    at: 'Desk', class: 'DanceSports', status: 'color4'   },
  { name: '백주영', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' ,
    at: 'QR', class: 'Cycling', status: 'color5'   },
  { name: '남궁희', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' ,
    at: 'QR', class: 'Cycling', status: 'color6'   },
  { name: '양희찬', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' ,
    at: 'Desk', class: 'Zumba', status: 'color6'   },
  { name: '김재석', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' ,
    at: 'QR', class: 'Cycling', status: 'color3'   },
  { name: '김찬호', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' ,
    at: 'QR', class: 'Zumba', status: 'color1'   },
  { name: '이지호', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' ,
    at: 'Desk', class: 'Cycling', status: 'color5'   },
  { name: '오수정', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' ,
    at: 'Smart Band', class: 'Cycling', status: 'color1'   },
  { name: 'John Smith', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' ,
    at: 'QR', class: 'Cycling', status: 'color6' },
  { name: '신민희', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' ,
    at: 'QR', class: 'Pilates', status: 'color6'   },
  { name: '박성준', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' ,
    at: 'QR', class: 'Cycling', status: 'color1'   },
  { name: '김찬송', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' ,
    at: 'Desk', class: 'Zumba', status: 'color2'   },
  { name: '최주희', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' ,
    at: 'QR', class: 'Pilates', status: 'color3'   },
  { name: '임보석', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' ,
    at: 'QR', class: 'Zumba', status: 'color1'   },
  { name: '안태원', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' ,
    at: 'QR', class: 'Pilates', status: 'color2'   },
  { name: '하대경', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' ,
    at: 'QR', class: 'Cycling', status: 'color1'   },
  { name: 'Rebecca Taylor', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' ,
    at: 'QR', class: 'Pilates', status: 'color1' },
  { name: '권일철', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' ,
    at: 'Smart Band', class: 'Cycling', status: 'color4'   },
  { name: '윤효정', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' ,
    at: 'Smart Band', class: 'Cycling', status: 'color6'   },
  { name: '하일성', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' ,
    at: 'QR', class: 'Pilates', status: 'color1'   },
  { name: '박나라', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' ,
    at: 'QR', class: 'Cycling', status: 'color2'   },
  { name: '황지원', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' ,
    at: 'Desk', class: 'Cycling', status: 'color5'   },
  { name: '김주영', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' ,
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


