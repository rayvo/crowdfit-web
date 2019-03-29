import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { LockerManagementComponent } from './locker-management/locker-management.component';
import { AttendenceManagementComponent } from './attendence-management/attendence-management.component';
import { ServiceCenterComponent } from './service-center/service-center.component';
import { PermissionSettingsComponent } from './permission-settings/permission-settings.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthGuard } from '../shared';
import { MatTableModule, MatFormFieldModule, MatInputModule, MatCheckboxModule } from '@angular/material';
import { PermissionStaffManagementComponent } from './permission-settings/permission-staff-management/permission-staff-management.component';
import { PermissionResidentManagementComponent } from './permission-settings/permission-resident-management/permission-resident-management.component';
import { PermissionStoreManagementComponent } from './permission-settings/permission-store-management/permission-store-management.component';
import { PermissionAccountingManagementComponent } from './permission-settings/permission-accounting-management/permission-accounting-management.component';
import { PermissionClassManagementComponent } from './permission-settings/permission-class-management/permission-class-management.component';
import { PermissionLockerManagementComponent } from './permission-settings/permission-locker-management/permission-locker-management.component';
import { PermissionAttendenceManagementComponent } from './permission-settings/permission-attendence-management/permission-attendence-management.component';
import { PermissionServiceCenterComponent } from './permission-settings/permission-service-center/permission-service-center.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,

  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    StaffManagementComponent,
    LockerManagementComponent,
    AttendenceManagementComponent,
    ServiceCenterComponent,
    PermissionSettingsComponent,
    FooterComponent,

    PermissionStaffManagementComponent,
    PermissionResidentManagementComponent,
    PermissionStoreManagementComponent,
    PermissionAccountingManagementComponent,
    PermissionClassManagementComponent,
    PermissionLockerManagementComponent,
    PermissionAttendenceManagementComponent,
    PermissionServiceCenterComponent
  ],
  providers: [AuthGuard]
})
export class LayoutModule { }
