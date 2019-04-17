import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


// RoleFeaturePermission Fake Data
const RFP = [
  {
    id: 1,
    name: '공지사항',
    permissions: [
      {
        id: 1,
        name: '목록보기',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원',   checked: true },
          { id: 4, name: '관리자', checked: true  }
        ]
      },
      {
        id: 2,
        name: '읽기권한',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
      {
        id: 3,
        name: '쓰기권한',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
      {
        id: 4,
        name: '댓글쓰기',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
      {
        id: 5,
        name: '강제 삭제',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
      {
        id: 6,
        name: '작성글 숨기기',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
    ]
  },
  {
    id: 2,
    name: '토크박스',
    permissions: [
      {
        id: 1,
        name: '목록보기',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
      {
        id: 2,
        name: '읽기권한',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
      {
        id: 3,
        name: '쓰기권한',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
      {
        id: 4,
        name: '댓글쓰기',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
      {
        id: 5,
        name: '강제 삭제',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
      {
        id: 6,
        name: '작성글 숨기기',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
    ]
  },
  {
    id: 3,
    name: '아나바다',
    permissions: [
      {
        id: 1,
        name: '목록보기',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
      {
        id: 2,
        name: '읽기권한',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
      {
        id: 3,
        name: '쓰기권한',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
      {
        id: 4,
        name: '댓글쓰기',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
      {
        id: 5,
        name: '강제 삭제',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
      {
        id: 6,
        name: '작성글 숨기기',
        roles: [
          { id: 1, name: '비회원', checked: false },
          { id: 2, name: '입주민', checked: false },
          { id: 3, name: '직원', checked: false },
          { id: 4, name: '관리자', checked: true }
        ]
      },
    ]
  },

];

export interface myRFPIds {
  rfpId?: number;
  roleId: number;
  featId: number;
  permId: number;
  isChecked: boolean;
}

@Component({
  selector: 'app-permission-accounting-management',
  templateUrl: './permission-accounting-management.component.html',
  styleUrls: ['./permission-accounting-management.component.scss']
})
export class PermissionAccountingManagementComponent implements OnInit {

  myRFP = [];

  // TODO get RFP properly from service
  // myRFP = RFP;
  toUpdateRFPs: myRFPIds[];


  constructor(
    private user: UserService,
  ) {
    // TODO
    // Get the correct feature Id for this page
    this.user.getRFPsByFeature( 1 ).subscribe(
      data => {
        console.log(data);
        this.myRFP.push({
          id: 1, // Feature Id
          name: '공지사항',
          permissions: data.results
        });
      },
      error => {
        console.log(error);
      }
    );
    this.user.getRFPsByFeature( 2 ).subscribe(
      data => {
        this.myRFP.push({
          id: 2, // Feature Id
          name: '토크박스',
          permissions: data.results
        });
      },
      error => {
        console.log(error);
      }
    );
    this.user.getRFPsByFeature( 3 ).subscribe(
      data => {
        this.myRFP.push({
          id: 3, // Feature Id
          name: '아나바다',
          permissions: data.results
        });
      },
      error => {
        console.log(error);
      }
    );


  }

  ngOnInit() {
  }


  save() {
    // TODO Save
  }

  clickedBox( rId , fId , pId, checked ) {
    let found = false;
    for ( const element of this.toUpdateRFPs ) {
      if ( (element.roleId === rId) && (element.featId === fId) && (element.permId === pId) ) {
        element.isChecked = checked;
        found = true;
        break;
      }
    }
    if ( found === false ) {
      this.toUpdateRFPs.push({
        roleId: rId,
        featId: fId,
        permId: pId,
        isChecked: checked,
      });
    }

    // TODO tihs.user.UPDATE THE RFP



    // TODO Below is for fake data. Remove when using real data
    // this.myRFP[fId - 1].permissions[pId - 1].roles[rId - 1].checked = checked;

    // console.log('#### NEW CLICK ####');
    // // console.log('rId: ' + rId + '\nfId: ' + fId + '\npId: ' + pId);
    // console.log('RFP Feature: ' + this.myRFP[fId - 1].name +
    // '\nRFP Permission: ' + this.myRFP[fId - 1].permissions[pId - 1].name +
    // '\nRFP Role: ' + this.myRFP[fId - 1].permissions[pId - 1].roles[rId - 1].name +
    // '\nchecked: ' + checked);

  }


}




