import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatDividerModule, MatSort, MatPaginator, MatDialog } from '@angular/material';
import { UserService } from 'src/app/services/user.service';

export interface Attendance {
  value: string;
  viewValue: string;
}

export interface AData {
  name: string;
  img: string;
  at: string;
  status: string;
}

const FAKE_DATA: AData[] = [
  { name: 'aaa', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' , at: 'QR', status: 'color1'  },
  { name: 'bbb', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , at: 'QR', status: 'color2'  },
  { name: 'ccc', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' , at: 'QR', status: 'color3'  },
  { name: 'ddd', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , at: 'QR', status: 'color4'   },
  { name: 'eee', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' , at: 'QR', status: 'color5'   },
  { name: 'fff', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , at: 'QR', status: 'color6'   },
  { name: 'ggg', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' , at: 'QR', status: 'color6'   },
  { name: 'hhh', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , at: 'QR', status: 'color3'   },
  { name: 'iii', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' , at: 'QR', status: 'color1'   },
  { name: 'jjj', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , at: 'QR', status: 'color5'   },
  { name: 'kkk', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' , at: 'QR', status: 'color1'   },
  { name: 'lll', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , at: 'QR', status: 'color6'   },
  { name: 'mmm', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' , at: 'QR', status: 'color6'   },
  { name: 'nnn', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , at: 'QR', status: 'color1'   },
  { name: 'ooo', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' , at: 'QR', status: 'color2'   },
  { name: 'ppp', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , at: 'QR', status: 'color3'   },
  { name: 'qqq', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' , at: 'QR', status: 'color1'   },
  { name: 'rrr', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , at: 'QR', status: 'color2'   },
  { name: 'sss', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' , at: 'QR', status: 'color1'   },
  { name: 'ttt', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , at: 'QR', status: 'color1'   },
  { name: 'uuu', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' , at: 'QR', status: 'color1'   },
  { name: 'vvv', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , at: 'QR', status: 'color1'   },
  { name: 'www', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' , at: 'QR', status: 'color1'   },
  { name: 'xxx', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , at: 'QR', status: 'color2'   },
  { name: 'yyy', img: 'https://material.angular.io/assets/img/examples/shiba1.jpg' , at: 'QR', status: 'color5'   },
  { name: 'zzz', img: 'https://material.angular.io/assets/img/examples/shiba2.jpg' , at: 'QR', status: 'color1'   },
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

  // displayedColumns: string[] = ['realtime', 'class', 'staff', 'member', 'guest', 'today'];

  // TODO change from fake data to real data
  attendenceList: AData[] = FAKE_DATA;
  filterNumber;
  filteredAList: AData[] = [];

  attendences: Attendance[] = [
    { value: '0', viewValue: '전체' },
    { value: '1', viewValue: '회원권만료예정' },
    { value: '2', viewValue: '락커기간만료예정' },
    { value: '3', viewValue: '신규회원' },
    { value: '4', viewValue: '만료회원' },
    { value: '5', viewValue: '클래스타임오버체크' },
    { value: '6', viewValue: '휴회회원입장' }
  ];

  constructor(
    private dialog: MatDialog,
    private user: UserService
  ) {
    // this.getAttendanceData();
    this.filterAndReloadTable('0');
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    // this.dataSource1.filterPredicate = ( data: AList, filter: string ) => {
    //   return (data.name.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 ||
    //   data.phone.trim().toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1 );
    // };
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

  // TODO take an int (predetermined) and filter -> remake data -> reload data
  filterAndReloadTable( f ) {
    this.filteredAList = [];
    if ( f === '0' ) {
      this.filteredAList = this.attendenceList;
    } else {
      for ( const p of this.attendenceList ) {
        if ( p.status === 'color' + f ) {
          this.filteredAList.push(p);
        }
      }
    }
  }
}


