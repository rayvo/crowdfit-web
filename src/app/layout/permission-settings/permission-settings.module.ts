import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { PermissionSettingsComponent } from './permission-settings.component';
import { PermissionSettingsRoutingModule } from './permission-settings-routing.module';

import { PermissionAccountingManagementComponent } from './permission-accounting-management/permission-accounting-management.component';
import { PermissionAttendenceManagementComponent } from './permission-attendence-management/permission-attendence-management.component';
import { PermissionClassManagementComponent } from './permission-class-management/permission-class-management.component';
import { PermissionLockerManagementComponent } from './permission-locker-management/permission-locker-management.component';
import { PermissionResidentManagementComponent } from './permission-resident-management/permission-resident-management.component';
import { PermissionServiceCenterComponent } from './permission-service-center/permission-service-center.component';
import { PermissionStaffManagementComponent } from './permission-staff-management/permission-staff-management.component';
import { PermissionStoreManagementComponent } from './permission-store-management/permission-store-management.component';
import { PermissionMenuManagementComponent } from './permission-menu-management/permission-menu-management.component';
import { MatCheckboxModule, MatFormFieldModule, MatTableModule, MatInputModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { UserService } from 'src/app/services/user.service';



@NgModule({
  imports: [
    CommonModule,
    PermissionSettingsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbCarouselModule,
    NgbAlertModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatCardModule
  ],
  declarations: [
    PermissionSettingsComponent,
    PermissionAccountingManagementComponent,
    PermissionAttendenceManagementComponent,
    PermissionClassManagementComponent,
    PermissionLockerManagementComponent,
    PermissionResidentManagementComponent,
    PermissionServiceCenterComponent ,
    PermissionStaffManagementComponent,
    PermissionStoreManagementComponent,
    PermissionMenuManagementComponent,
  ],
  providers: [ UserService ],


})
export class PermissionSettingsModule { }
