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

import { FooterComponent } from './components/footer/footer.component';
import { AuthGuard } from '../shared';
import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatDialogModule,
  MatPaginatorModule
} from '@angular/material';

import { SMPopupComponent } from './staff-management/sm-popup.component';
import { SMPopFileComponent } from './staff-management/sm-pop-file.component';


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
    MatDialogModule,
    MatPaginatorModule,

  ],
  declarations: [
    LayoutComponent,
    SidebarComponent,
    HeaderComponent,
    LockerManagementComponent,
    AttendenceManagementComponent,
    ServiceCenterComponent,
    FooterComponent,

    StaffManagementComponent,
    SMPopupComponent,
    SMPopFileComponent,



  ],
  providers: [AuthGuard],
  entryComponents: [
    SMPopupComponent,
    SMPopFileComponent,
  ]
})
export class LayoutModule { }
