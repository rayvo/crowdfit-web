import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { CommunityMemberManagementComponent } from './community-member-management/community-member-management.component';
import { GeneralResidentManagementComponent } from './general-resident-management/general-resident-management.component';
import { ResidentRoutingModule } from './resident-routing.module';
import { ResidentManagementComponent } from './resident-management.component';
import { GRMPopFileComponent } from './general-resident-management/grm-pop-file.component';
import { GRMPopupComponent } from './general-resident-management/grm-popup.component';
import { GRMPopPaauComponent } from './general-resident-management/grm-pop-paau.component';
import {
  MatDialogModule,
  MatTableModule,
  MatFormFieldModule,
  MatIconModule,
  MatPaginatorModule,
  MatInputModule,
  MatCardModule,
  MatPaginatorIntl,
  MatSelectModule,
  MatOptionModule
} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { GRMPopInviteComponent } from './general-resident-management/grm-pop-invite.component';
import { CMMPopPaamComponent } from './community-member-management/cmm-pop-paam.component';
import { CMMPopSBComponent } from './community-member-management/cmm-pop-sb.component';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ResidentRoutingModule,
    MatDialogModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule
    // MatPaginatorIntl
  ],
  declarations: [
      CommunityMemberManagementComponent,
      GeneralResidentManagementComponent,
      ResidentManagementComponent,
      GRMPopupComponent,
      GRMPopFileComponent,
      GRMPopPaauComponent,
      GRMPopInviteComponent,
      CMMPopPaamComponent,
      CMMPopSBComponent


  ],
  providers: [],
  bootstrap: [ResidentManagementComponent],
  entryComponents: [
    GRMPopupComponent,
    GRMPopFileComponent,
    GRMPopPaauComponent,
    GRMPopInviteComponent,
    CMMPopPaamComponent,
    CMMPopSBComponent
  ]
})
export class ResidentModule { }
