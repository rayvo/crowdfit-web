import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermissionAccountingManagementComponent } from './permission-accounting-management/permission-accounting-management.component';
import { PermissionAttendenceManagementComponent } from './permission-attendence-management/permission-attendence-management.component';
import { PermissionClassManagementComponent } from './permission-class-management/permission-class-management.component';
import { PermissionLockerManagementComponent } from './permission-locker-management/permission-locker-management.component';
import { PermissionResidentManagementComponent } from './permission-resident-management/permission-resident-management.component';
import { PermissionServiceCenterComponent } from './permission-service-center/permission-service-center.component';
import { PermissionStaffManagementComponent } from './permission-staff-management/permission-staff-management.component';
import { PermissionStoreManagementComponent } from './permission-store-management/permission-store-management.component';
import { PermissionMenuManagementComponent } from './permission-menu-management/permission-menu-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'menu-setting', pathMatch: 'full' },
  { path: 'account-setting', component:  PermissionAccountingManagementComponent},
  { path: 'attendence-setting', component:   PermissionAttendenceManagementComponent},
  { path: 'class-setting', component:  PermissionClassManagementComponent},
  { path: 'locker-setting', component:  PermissionLockerManagementComponent},
  { path: 'resident-setting', component:  PermissionResidentManagementComponent},
  { path: 'service-setting', component:   PermissionServiceCenterComponent},
  { path: 'staff-setting', component:  PermissionStaffManagementComponent},
  { path: 'store-setting', component:   PermissionStoreManagementComponent},
  { path: 'menu-setting', component:  PermissionMenuManagementComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionSettingsRoutingModule { }
