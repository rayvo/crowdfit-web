import { Injectable } from '@angular/core';
import { User } from '../models/user';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpEventType, HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { MatYearView } from '@angular/material';
import { RepeatPasswordValidator } from '../signup/signup.validators';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'Token ' + localStorage.getItem('token'),
    'Content-Type': 'application/json'
  })
};
const httpOptions2 = {
  headers: new HttpHeaders({
    // 'Authorization': 'Token ' + localStorage.getItem('token'),
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class UserService {
  serverUrl = 'http://192.168.1.6:8000';

  constructor(private http: HttpClient) {}

  // POST	/api/v2/register/
  // fullname: TEXT,
  // email: TEXT,
  // password: TEXT,
  // phone: TEXT
  createUser(userData): Observable<any> {
    // TODO check 'fullname' or 'username'
    const body = {
      fullname: userData.value.username,
      email: userData.value.email,
      password: userData.value.password,
      phone: userData.value.phone
    };
    return this.http.post(this.serverUrl + '/api/v2/register/', body, httpOptions2);
  }

  // POST	/api/v2/register/
  // fullname: TEXT,
  // email: TEXT,
  // password: TEXT,
  // phone: TEXT
  createUserWithToken(userData): Observable<any> {
    // TODO check 'fullname' or 'username'
    const body = {
      fullname: userData.value.username,
      email: userData.value.email,
      password: userData.value.password,
      phone: userData.value.phone
    };
    return this.http.post(this.serverUrl + '/api/v2/register/', body, httpOptions);
  }

  // POST	/api/v2/auth/
  // email: INPUT,
  // password: INPUT
  loginUser(userData): Observable<any> {
    console.log(localStorage.getItem('token'));
    return this.http.post(this.serverUrl + '/api/v2/auth/', userData, httpOptions2);
    // Get /api/login last feature (change, last feature will be sent to me through /api/v2/auth/)
    // When i logout send last feature
    // when routing update localStorage's last feature
  }


  // POST	/api/v2/apartment_existed/
  // name: TEXT,
  // postcode: TEXT
  isAptAvailable( aptInfo ): Observable<any> {
    const body = {
      name: aptInfo.apt_name,
      postcode: aptInfo.zipNo
    };
    return this.http.post(this.serverUrl + '/api/v2/apartment_existed/', body, httpOptions);
  }


  // POST /api/v2/register_user/
  // apt_id: INT
  // address_dong: TEXT
  // house_number: TEXT
  // document_file_id: INT/NULL
  userRegister( aptId, myDong, myHouseNum, fileId ): Observable<any> {
    const body = {
      apt_id: aptId,
      address_dong: myDong,
      house_number: myHouseNum,
      document_file_id: fileId,
    };
    return  this.http.post(this.serverUrl + '/api/v2/register_user/', body, httpOptions);
  }

  // POST /api/v2/register_staff/
  // apt_id: INT
  // department_id: INT
  // role_id: INT
  // document_file_id: INT/NULL
  staffRegister( aptId, deptId, roleId, fileId ): Observable<any> {
    const body = {
      apt_id: aptId,
      department_id: deptId,
      role_id: roleId,
      document_file_id: fileId,
    };
    return  this.http.post(this.serverUrl + '/api/v2/register_staff/', body, httpOptions);
  }


  // POST /api/v2/register_ceo/
  // document_id: INT/NULL
  // apt_name: TEXT
  // city_id: INT
  // address_gu: TEXT
  // address_dong: TEXT
  // address_road: TEXT
  // address_detail: TEXT
  // postcode: TEXT
  // phone:TEXT
  // latitude:decimal
  // longitude:decimal
  // description:TEXT
  ceoRegister( fileId, aptInfo, myPhone, myDesc ): Observable<any> {
    const body = {
      document_file_id: fileId,
      apt_name: aptInfo.bdNm,
      // TODO Ask about city id
      city_id: 1,
      address_gu: aptInfo.sggNm,
      address_dong: aptInfo.emdNm + ' ' + aptInfo.lnbrMnnm + ' ' + aptInfo.lnbrSlno,
      address_road: aptInfo.roadAddrPart1,
      // TODO Do CEO have to add their apt name dong and ho?
      address_detail: aptInfo.bdNm,
      postcode: aptInfo.zipNo,
      phone: myPhone,
      latitude: aptInfo.latitude,
      longitude: aptInfo.longitude,
      description: myDesc
    };
    return  this.http.post(this.serverUrl + '/api/v2/register_ceo/', body, httpOptions);
  }



  // GET /api/v2/list_all_department/
  // apt_id: INT/NULL
  listAllDepartment( aptId ): Observable<any> {
    return this.http.get( this.serverUrl + 'api/v2/list_all_department/' + aptId, httpOptions );
  }

  // GET /api/v2/list_all_role_of_department/
  // department_id: INT
  listAllRoleOfDepartment( deptId ): Observable<any> {
    return this.http.get( this.serverUrl + 'api/v2/list_all_role_of_department/' + deptId, httpOptions);
  }


  /*
   * Wait for db on the following
   *
   * createDept
   * updateDept
   * deleteDept
   * createRole
   * updateRole
   * deleteRole
   *
   */


  // POST /api/v2/create_dep_role/
  // department_id: INT
  // role_id: INT
  createDeptRole( deptId, roleId ) {
    const body = {
      department_id: deptId,
      role_id: roleId
    };
    return this.http.post( this.serverUrl + '/api/v2/create_dep_role/', body, httpOptions);
  }

  // PUT /api/v2/update_dep_role/<int:dep_role_id>
  // role_id: INT/NULL
  // is_active: BOOL/NULL
  updateDeptRole( deptRoleId, roleId, isActive ) {
    const body = {
      role_id: roleId, // can be null
      is_active: isActive // can be null
    };
    return this.http.put( this.serverUrl + '/api/v2/update_dep_role/' + deptRoleId, body, httpOptions);
  }

  // DELETE /api/v2/delete_dep_role/<int:dep_role_id>
  deleteDeptRole( deptRoleId ) {
    return this.http.delete( this.serverUrl + '/api/v2/delete_dep_role/' + deptRoleId, httpOptions );
  }


  // GET /api/v2/list_user_by_status
  // apt_id: INT
  // status_id: INT (Applying/Waiting for Aproval/Approved....)
  getUsersByStatus( aptId, statusId ): Observable<any> {
    const params = new HttpParams();
    params.append('apt_id', aptId );
    params.append('status_id', statusId );
    return this.http.get(
      this.serverUrl + '/api/v2/list_user_by_status/'  + localStorage.getItem('id'),
      { headers: httpOptions.headers, params: params }
      );
  }


  // GET /api/v2/list_staff_by_status
  // apt_id: INT
  // status_id: INT (Applying/Waiting for Aproval/Approved....)
  getStaffsByStatus( aptId, statusId ): Observable<any> {
    const params = new HttpParams();
    params.append('apt_id', aptId );
    params.append('status_id', statusId );
    return this.http.get(
      this.serverUrl + '/api/v2/list_staff_by_status/' + localStorage.getItem('id') ,
      { headers: httpOptions.headers, params: params}
      );
  }


  // POST /api/v2/approve_user/
  // user_id: INT
  // staff_id: INT
  approveUser( userId ): Observable<any> {
    const body = {
      user_id: userId,
      staff_id: Number(localStorage.getItem('id'))
    };
    return this.http.post( this.serverUrl + '/api/v2/approve_user/', body, httpOptions );
  }

  // POST /api/v2/approve_staff/
  // user_id: INT
  // staff_id: INT
  approveStaff( userId ): Observable<any> {
    const body = {
      user_id: userId,
      staff_id: Number(localStorage.getItem('id'))
    };
    return this.http.post( this.serverUrl + '/api/v2/approve_staff/', body, httpOptions );
  }

  // POST /api/v2/approve_ceo/
  // user_id: INT
  // staff_id: INT
  approveCEO( userId ): Observable<any> {
    const body = {
      user_id: userId,
      staff_id: Number(localStorage.getItem('id'))
    };
    return this.http.post( this.serverUrl + '/api/v2/approve_ceo/', body, httpOptions );
  }







  // TODO , Ray hasn't uploaded the api for this yet. So below is just my guess
  // RFP = Role Feature Permission
  setRFP( roleId, featureId, permissionId ) {
    const body = {
      rold_id: roleId,
      feature_id: featureId,
      permission_id: permissionId
    };
    return this.http.post( this.serverUrl + '/api/v2/update_role_feature_permission', body, httpOptions);
  }





/* ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 * ##############################################################################################
 */











  // POST	/api/v2/upload_doc_file/
  // user_id: INT
  // doc_file: file,
  uploadFile(userId, file ): Observable < any > {
    const formData = new FormData();
    formData.append('user_id', userId);
    formData.append('doc_file', file);
    return this.http.post(this.serverUrl + '/api/v2/upload_doc_file/', formData, { reportProgress: true, observe: 'events' });
  }


  // Can't add body to delete, thus passing ????
  // DELETE	/api/v2/delete_doc_file/
  // document_file_id: INT
  // user_id: INT
  deleteFile( fileId, userId  ): Observable < any > {
    // const formData = new FormData();
    // formData.append('document_file_id', fileId);
    // formData.append('user_id', userId);
    // const options = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   }),
    //   body: {
    //     id: 1,
    //     name: 'test',
    //   },
    // };
    return this.http.delete(this.serverUrl + '/api/v2/delete_doc_file/'  + fileId, httpOptions);
  }

  // PUT /api/v2/upload_doc_file/
  // document_file_id: INT
  // doc_file: file
  // user_id: INT
  updateFile( fileId, file, userId ): Observable < any > {
    const formData = new FormData();
    formData.append('document_file_id', fileId);
    formData.append('doc_file', file);
    formData.append('user_id', userId);
    return this.http.put(this.serverUrl + '/api/v2/update_doc_file/', formData, httpOptions);
  }




  // POST	/api/address/
  // name: TEXT
  // city_id: INT
  // address_gu: TEXT
  // address_dong: TEXT
  // address_road: TEXT
  // address_detail: TEXT
  // postcode: TEXT
  // phone:TEXT
  // latitude:decimal
  // longitude:decimal
  // description:TEXT
  // user_role_status_id: INT
  createApt( jusoInfo, inputPhone, inputDesc, ursId ): Observable<any> {
    const body = {
      name: jusoInfo.bdNm,
      cityId: jusoInfo.siNm,
      a_gu: jusoInfo.sggNm,
      a_dong: jusoInfo.emdNm,
      a_road: jusoInfo.rn,
      a_detail: '' + jusoInfo.buldMnnm + jusoInfo.buldSlno,
      postcode: jusoInfo.zipNo,
      phone: inputPhone,
      // lat: ?,
      // lon: ?,
      desc: inputDesc,
      user_role_status_id: ursId,
    };
    return this.http.post(this.serverUrl + '/api/v2/apartment/', body, httpOptions);
  }

  // PUT	/api/address/
  // apartment_id: INT
  // name: TEXT
  // city_id: INT
  // address_gu: TEXT
  // address_dong: TEXT
  // address_road: TEXT
  // address_detail: TEXT
  // postcode: TEXT
  // phone:TEXT
  // latitude:TEXT
  // longitude:TEXT
  // description:TEXT
  // is_active: BOOLEAN
  // user_role_status_id: INT
  updateApt( apt, myActive, ursId ): Observable<any> {
    const body = {
      apartment_id: apt.id,
      name: apt.name,
      city_id: apt.city_id,
      address_gu: apt.address_gu,
      address_dong: apt.address_dong,
      address_detail: apt.address_detail,
      postcode: apt.postcode,
      phone: apt.phone,
      // lat: ?,
      // lon: ?,
      description: apt.description,
      is_active: myActive,
      user_role_status_id: ursId,
    };
    return this.http.put(this.serverUrl + 	'/api/v2/apartment/' + apt.id, body, httpOptions);
  }





  // POST	/api/department/
  // name: INPUT,
  // apartment_id: FUNCTION,
  // description: INPUT,
  // user_role_status_id: INT
  createDept( myName, myId, myDesc, ursId ): Observable <any> {
    const body = {
      name: myName,
      apartment_id: myId,
      description: myDesc,
      user_role_status_id: ursId,
    };
    return this.http.post(this.serverUrl + '/api/v2/department/', body, httpOptions);
  }

  // POST	/api/role/
  // role INPUT,
  // description: INPUT,
  // user_role_status_id: INT
  createRole(myRole, myDesc, myActive): Observable<any> {
    const body = {
      role: myRole,
      description: myDesc,
      is_active: myActive
    };
    return this.http.post(this.serverUrl + '/api/role/', body, httpOptions);
  }

  // PUT	/api/role/
  // id: INT
  // role: TEXT,
  // description: TEXT
  // is_active: BOOLEAN
  // user_role_status_id: INT
  updateRole(role, myActive, ursId): Observable < any > {
    const body = {
      id: role.id,
      role: role.id,
      description: role.description,
      is_active: myActive,
      user_role_status_id: ursId,
    };
    return this.http.put(this.serverUrl + '/api/role/', body, httpOptions);
  }






  //   POST	/api/userrolestatus/
  // "user_id: localStorage,
  // department_role_id: null
  // status_id: ***
  // staff_id: null,
  // document_file_id: null,
  // is_active: false"
/*  createURSApplying(): Observable < any > {
    const body = {
      user_id: localStorage.getItem('id'),
      status_id: 1, // something predetermined
      is_active: false,
    };
    return this.http.post(this.serverUrl + '/api/userrolestatus/', body, httpOptions);
  } */

  // PUT	/api/userrolestatus/
  // "id: No Change
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
    const params = new HttpParams().set('is_active', myStatusId).set('apt_id', localStorage.getItem('aptId'));
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
    const params = new HttpParams().set('status_id', myStatusId).set('apt_id', localStorage.getItem('aptId'));
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
