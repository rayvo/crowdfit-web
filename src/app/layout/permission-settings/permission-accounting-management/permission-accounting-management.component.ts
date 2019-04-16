import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


const ROLES = [
  { id: 1, name: '비회원' },
  { id: 2, name: '입주민' },
  { id: 3, name: '직원' },
  { id: 4, name: '관리자' },
];

const FEATURES = [
  { id: 1, name: '공지사항' },
  { id: 2, name: '토크박스' },
  { id: 3, name: '아나바다' },
];

const PERMISSIONS = [
  { id: 1, name: '목록보기' },
  { id: 2, name: '읽기권한' },
  { id: 3, name: '쓰기권한' },
  { id: 4, name: '댓글쓰기' },
  { id: 4, name: '강제 삭제' },
  { id: 4, name: '작성글 숨기기' },
];


@Component({
  selector: 'app-permission-accounting-management',
  templateUrl: './permission-accounting-management.component.html',
  styleUrls: ['./permission-accounting-management.component.scss']
})
export class PermissionAccountingManagementComponent implements OnInit {

  form: FormGroup;
  myRoles = ROLES;
  myFeats = FEATURES;
  myPerms = PERMISSIONS;


  constructor(
    private user: UserService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      myRoles: new FormArray([]),
      myFeats: new FormArray([]),
      myPerms: new FormArray([]),
    });

    this.addCheckboxes();
  }

  ngOnInit() {
  }

  addCheckboxes() {
    this.myRoles.map((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.form.controls.myRoles as FormArray).push(control);
    });
  }

  saveBoard() {
    // TODO Save 공지사항
  }

  clickedBox( r , f , p ) {

  }


}




