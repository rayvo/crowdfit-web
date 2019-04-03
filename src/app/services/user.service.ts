import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpEventType, HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { MatYearView } from '@angular/material';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserService {
  serverUrl = 'http://192.168.1.6:8000';

  constructor(private http: HttpClient) {}

  // POST	/api/users/
  // "fullname: INPUT,
  // email: INPUT,
  // password: INPUT,
  // phone: INPUT"
  createUser(userData): Observable<any> {
    let phonenullcheck = '1';
    if (userData.value.phone === '') {
      phonenullcheck = null;
    } else {
      phonenullcheck = userData.value.phone;
    }

    const body = {
      username: userData.value.username,
      email: userData.value.email,
      password: userData.value.password,
      phone: phonenullcheck
    };

    return this.http.post(this.serverUrl + '/api/users/', body, httpOptions);
  }

  // POST	/api/v2/auth/
  // "email: INPUT,
  // password: INPUT"

  loginUser(userData): Observable<any> {
    return this.http.post(this.serverUrl + '/api/v2/auth/', userData, httpOptions);
    // Get /api/login last feature (change, last feature will be sent to me through /api/v2/auth/)
    // When i logout send last feature
    // when routing update localStorage's last feature
  }


  // POST	/api/address/
  // "name: .bdNm,
  // cityId: **siNm,
  // a_gu: .sggNm,
  // a_dong: emdNm,
  // a_road: rn,
  // a_detail: buldMnnm + buldSlno,
  // postcode: zipNo,
  // phone: INPUT,
  // desc: INPUT,
  // lat: ?,
  // lon: ?,
  // address_id: ? (admCd+rnMgtSn) or bdMgtSn
  // is_active: false"

  createApt( jusoInfo, input ): Observable<any> {
    const body = {
      name: jusoInfo.bdNm,
      cityId: jusoInfo.siNm,
      a_gu: jusoInfo.sggNm,
      a_dong: jusoInfo.emdNm,
      a_road: jusoInfo.rn,
      a_detail: '' + jusoInfo.buldMnnm + jusoInfo.buldSlno,
      postcode: jusoInfo.zipNo,
      phone: input.phone,
      desc: input.desc,
      // lat: ?,
      // lon: ?,
      // address_id: jusoInfo.bdMgtSn, // ? (admCd+rnMgtSn) or bdMgtSn
      is_active: false

    };
    return this.http.post(this.serverUrl + '/api/address/', body, httpOptions);
  }

  // PUT	/api/address/
  // "id: id
  // is_active: true"

  updateApt( data, boo ): Observable<any> {
    const body = {
      id: data,
      is_active: boo
    };
    return this.http.put(this.serverUrl + '/api/address/', body, httpOptions);
  }

  // POST	/api/address/
  // "a_detail: No Change
  // address_id: No Change"

  isAvailableApt( data ): Observable<any> {
    const body = {
      address_detail: data.detail,
      address_id: data.id
    };
    return this.http.post(this.serverUrl + '/api/address/', body, httpOptions);
  }

  // GET	/api/address/?
  // is_active : boolean
  getAptByIsActive( param ): Observable<any> {
    const params = new HttpParams().set('is_active', param);
    return this.http.get(this.serverUrl + '/api/address/', {headers: httpOptions.headers, params: params});
  }

  // POST	/api/department/
  // "name: INPUT,
  // apartment_id: FUNCTION,
  // description: INPUT,"
  createDept( myName, myId, myDesc): Observable <any> {
    const body = {
      name: myName,
      apartment_id: myId,
      description: myDesc
    };
    return this.http.post(this.serverUrl + '/api/department/', body, httpOptions);
  }

  // POST	/api/role/
  // "role INPUT,
  // description: INPUT,
  // is_active: boolean"
  createRole(myRole, myDesc, myActive): Observable<any> {
    const body = {
      role: MatYearView,
      description: myDesc,
      is_active: myActive
    };
    return this.http.post(this.serverUrl + '/api/role/', body, httpOptions);
  }

  // PUT	/api/role/
  // "id: id
  // is_active: true"

  updateRole(myId, myActive): Observable < any > {
    const body = {
      id: myId,
      is_active: myActive
    };
    return this.http.put(this.serverUrl + '/api/role/', body, httpOptions);
  }

  //   POST	/api/departmentrole/
  //   "department_id: FUNCTION,
  // role_id: FUNCTION,
  // is_active: boolean"
  createDeptRole( myId, myRoleId, myActive): Observable < any > {
    const body = {
      id: myId,
      role_id: myRoleId,
      is_active: myActive
    };
    return this.http.post(this.serverUrl + '/api/departmentrole/', body, httpOptions);
  }

  //   PUT	/api/departmentrole/
  //   "id: id
  // is_active: true"
  updateDeptRole(myId, myActive): Observable < any > {
    const body = {
      id: myId,
      is_active: myActive
    };
    return this.http.put(this.serverUrl + '/api/departmentrole/', body, httpOptions);
  }

  // POST	/api/documentfile/	"
  // file_name: file_name
  // file_url: **File
  // file_type: file_type,
  // file_size: file_size,"
  createDocFile(fileName, fileUrl, fileType, fileSize) {
    const formData = new FormData();
    formData.append('file_name', fileName);
    formData.append('file_url', fileUrl);
    formData.append('file_type', fileType);
    formData.append('file_size', fileSize);
    return this.http.post(this.serverUrl + '/api/documentfile/', formData, { reportProgress: true, observe: 'events' });
  }

  //   POST	/api/userrolestatus/
  // "user_id: localStorage,
  // department_role_id: null
  // status_id: ***
  // staff_id: null,
  // document_file_id: null,
  // is_active: false"
  createURSApplying(): Observable < any > {
    const body = {
      user_id: localStorage.getItem('id'),
      status_id: 1, // something predetermined
      is_active: false,
    };
    return this.http.post(this.serverUrl + '/api/userrolestatus/', body, httpOptions);
  }

  //   PUT	/api/userrolestatus/
  //   "id: No Change
  // user_id: No Change
  // department_role_id: FUNCTION,
  // status_id: ***
  // staff_id: null,
  // document_file_id: FUNCTION or null,
  // is_active: false"

  updateURSWaiting( myId, myDRId, myFileId): Observable < any > {
    const body = {
      id: myId,
      user_id: localStorage.getItem('id'),
      department_role_id: myDRId,
      status_id: 2, // something predetermined
      document_file_id: myFileId,
      is_active: false,
    };
    return this.http.put(this.serverUrl + '/api/userrolestatus/', body, httpOptions);
  }

  //   PUT	/api/userrolestatus/
  //   "id: No Change
  // user_id: No Change
  // status_id: ***
  // staff_id: localStorage
  // is_active: true"

  updateURSApproved( myId, myUserId ): Observable < any > {
    const body = {
      id: myId,
      user_id: myUserId,
      status_id: 3, // something predetermined
      staff_id: localStorage.getItem('id'),
      is_active: true,
    };
    return this.http.put(this.serverUrl + '/api/userrolestatus/', body, httpOptions);
  }

  //   PUT	/api/userrolestatus/
  // "id: No Change
  // user_id: No Change
  // status_id: ***
  // staff_id: localStorage
  // is_active: true"
  updateURSLeft( myId, myUserId ): Observable < any > {
    const body = {
      id: myId,
      user_id: myUserId,
      status_id: 4, // something predetermined
      staff_id: localStorage.getItem('id'),
      is_active: true,
    };
    return this.http.put(this.serverUrl + '/api/userrolestatus/', body, httpOptions);
  }

  // GET	???
  // 	"status_id: ***,
  // apt_id: localStorage, "
  getURSByAptAndStatus( myStatusId ): Observable < any > {
    const params = new HttpParams().set('is_active', myStatusId).set('apt_id', localStorage.getItem('AptId'));
    return this.http.get(this.serverUrl + '/api/???/', {headers: httpOptions.headers, params: params});
  }

  // POST	/api/household/
  // "apartment_id: **AptInfo
  // address_dong: INPUT,
  // house_number: INPUT,"
  createHH( aptData, dong, num ): Observable < any > {
    const body = {
      apartment_id: aptData,
      address_dong: dong,
      house_number: num,
    };
    return this.http.post(this.serverUrl + '/api/household/', body, httpOptions);
  }

  // PUT	/api/household/
  // "id: No Change
  // is_empty: boolean"
  updateHH( myId, myEmpty ): Observable < any > {
    const body = {
      id: myId,
      is_empty: myEmpty,
    };
    return this.http.put(this.serverUrl + '/api/household/', body, httpOptions);
  }

  // GET	???
  // "status_id: ***,
  // apt_id: localStorage, "
  getHHByAptAndStatus( myStatusId, myAptId ): Observable < any > {
    const params = new HttpParams().set('status_id', myStatusId).set('apt_id', localStorage.getItem('AptId'));
    return this.http.get(this.serverUrl + '/api/???/', {headers: httpOptions.headers, params: params});
  }

  // GET	???
  // id: HH_id
  getUserByHH( myHHId): Observable < any > {
    const params = new HttpParams().set('id', myHHId);
    return this.http.get(this.serverUrl + '/api/???/', {headers: httpOptions.headers, params: params});

  }

  // POST	/api/userhousehold/
  // "user_id: user_id
  // household_id: household_id
  // is_owner: ***
  // is_active: true"
  createUserHH( myUserId, myHHId, myOwner ): Observable < any > {
    const body = {
      user_id: myUserId,
      household_id: myHHId,
      is_owner: myOwner,
      is_active: true
    };
    return this.http.post(this.serverUrl + '/api/userhousehold/', body, httpOptions);
  }

  // PUT	/api/userhousehold/
  // "id: No Change
  // user_id: No Change
  // household_id: No Change
  // is_owner: false
  // is_active: false"
  updateUserHH( myId, myUserId, myHHId ): Observable < any > {
    const body = {
      id: myId,
      user_id: myUserId,
      household_id: myHHId,
      is_owner: false,
      is_active: false
    };
    return this.http.put(this.serverUrl + '/api/userhousehold/', body, httpOptions);
  }
}

/*

  createUser(userData): Observable < any > {
    let phonenullcheck = '1';
    if ( userData.value.phone === '' ) {
      phonenullcheck = null;
    } else {
      phonenullcheck = userData.value.phone;
    }

    const body = {
      username: userData.value.username,
      email: userData.value.email,
      password: userData.value.password,
      phone: phonenullcheck,
    };

    return this.http.post(this.serverUrl + '/api/users/', body, httpOptions);
  }

  login(userData): Observable<any> {
    const body = {
      email: userData.email,
      password: userData.password,
    };
    return this.http.post(this.serverUrl + '/api/v2/auth/', userData, httpOptions);
    // Get /api/login last feature (change, last feature will be sent to me through /api/v2/auth/)
    // When i logout send last feature
    // when routing update localStorage's last feature
  }

  getSingleUser(userId): Observable<any> {
    return this.http.get(this.serverUrl + '/api/users/' + userId, httpOptions);
  }

  createUserRole(userId, userRole): Observable<any> {
    const body = {
      user: userId,
      role: userRole,
      isActive: true,
    };
    return this.http.post(this.serverUrl + '/api/userrole/', body, httpOptions);
  }

  setUserRole(userId, userRole): Observable<any> {
    const body = {
      user: userId,
      role: userRole,
      isActive: true,
    };
    return this.http.put(this.serverUrl + '/api/userrole/', body, httpOptions);
  }


  // TODO : Ask what staff a user should get when it's first made
  // or no user status at all
  createUserStatusNone(userId): Observable<any> {
    const body = {
      user: userId,
      status: 1,
      // TODO What should be staff status when it's first made?
      // staff: localStorage.getItem('id'),
      // document_file: null
      isActive: true,
    };
    return this.http.post(this.serverUrl + '/api/userstatus/', body, httpOptions);
  }

  setUserStatusNone(userId): Observable<any> {
    const body = {
      user: userId,
      status: 1,
      // staff: localStorage.getItem('id'),
      // document_file: null
      isActive: true,
    };
    return this.http.put(this.serverUrl + '/api/userstatus/', body, httpOptions);
  }

  // TODO : For User Status Wait, Approved, and Evicted
  // For now just assume one user is staff.
  // We will have to initialize these things when we deploy the sytem later
  // FOr now a random user was createde as staff
  createUserStatusWait(userId): Observable<any> {
    const body = {
      user: userId,
      status: 2,
      // staff: localStorage.getItem('id'),
      // document_file: null
      isActive: true,
    };
    return this.http.post(this.serverUrl + '/api/userstatus/', body, httpOptions);
  }
  setUserStatusWait(userId): Observable<any> {
    const body = {
      user: userId,
      status: 2,
      // staff: localStorage.getItem('id'),
      // document_file: null
      isActive: true,
    };
    return this.http.put(this.serverUrl + '/api/userstatus/', body, httpOptions);
  }

  setUserStatusApproved(userId): Observable<any> {
    const body = {
      user: userId,
      status: 3,
      staff: localStorage.getItem('id'),
      isActive: true,
    };
    return this.http.put(this.serverUrl + '/api/userstatus/', body, httpOptions);
  }

  setUserStatusEvicted(userId): Observable<any> {
    const body = {
      user: userId,
      status: 5, // 4: 퇴거 신청 , 5: 퇴거 완로
      staff: localStorage.getItem('id'),
      isActive: false,
    };
    return this.http.put(this.serverUrl + '/api/userstatus/', body, httpOptions);
  }

  getUserStatuses(): Observable<any> {
    return this.http.get(this.serverUrl + '/api/userstatus/', httpOptions);
  }

  createHouseholdOccupied( aptId, dong, num, status ): Observable<any> {
    const body = {
      apt: aptId,
      addDong: dong,
      houseNum: num,
      status: 0, // 0: Occupied, 1: available
    };
    return this.http.post(this.serverUrl + '/api/household/', body, httpOptions);
  }

  createHouseholdAvailable( aptId, dong, num, status ): Observable<any> {
    const body = {
      apt: aptId,
      addDong: dong,
      houseNum: num,
      status: 1, // 0: Occupied, 1: available
    };
    return this.http.post(this.serverUrl + '/api/household/', body, httpOptions);
  }

  setHouseholdOccupied( aptId, dong, num, status ): Observable<any> {
    const body = {
      apt: aptId,
      addDong: dong,
      houseNum: num,
      status: 0, // 0: Occupied, 1: available
    };
    return this.http.put(this.serverUrl + '/api/household/', body, httpOptions);
  }

  setHouseholdAvailable( aptId, dong, num, status ): Observable<any> {
    const body = {
      apt: aptId,
      addDong: dong,
      houseNum: num,
      status: 1, // 0: Occupied, 1: available
    };
    return this.http.put(this.serverUrl + '/api/household/', body, httpOptions);
  }

  // TODO : When taeyu is finished making the db function for this part
  // 1) Ask him what the URL is
  // 2) Ask him what the body should be like so that I can set it properly
  createUserHousehold( userId, hhId, isOwner ): Observable<any> {
    const body = {
      user: userId,
      household: hhId,
      isOwner: isOwner,
    };
    return this.http.post(this.serverUrl + '/api/TODO/', body, httpOptions);
  }

  setUserHousehold( userId, hhId, isOwner ): Observable<any> {
    const body = {
      user: userId,
      household: hhId,
      isOwner: isOwner,
    };
    return this.http.put(this.serverUrl + '/api/TODO/', body, httpOptions);
  }

  createRFP( rId, fId, pId ): Observable<any> {
    const body = {
      role: rId,
      feature: fId,
      permission: pId,
      isActive: true,
    };
    return this.http.post(this.serverUrl + '/api/rolefeaturepermission/', body, httpOptions);
  }

  setRFP( rId, fId, pId ): Observable<any> {
    const body = {
      role: rId,
      feature: fId,
      permission: pId,
      isActive: true,
    };
    return this.http.put(this.serverUrl + '/api/rolefeaturepermission/', body, httpOptions);
  }

  createUserExerInfo( userId, userHeight, userWeight ) {
    const body = {
      user: userId,
      height: userHeight,
      weight: userWeight,
    };
    return this.http.post(this.serverUrl + '/api/userexerinfo/', body, httpOptions);
  }

  setUserExerInfo( userId, userHeight, userWeight ) {
    const body = {
      user: userId,
      height: userHeight,
      weight: userWeight,
    };
    return this.http.put(this.serverUrl + '/api/userexerinfo/', body, httpOptions);
  }

}


*/
