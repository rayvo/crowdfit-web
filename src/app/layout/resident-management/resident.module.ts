import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

import { CommunityMemberManagementComponent } from './community-member-management/community-member-management.component';
import { GeneralResidentManagementComponent } from './general-resident-management/general-resident-management.component';
import { ResidentRoutingModule } from './resident-routing.module';
import { ResidentManagementComponent } from './resident-management.component';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    FormsModule,
    HttpClientModule,
    ResidentRoutingModule,
  ],
  declarations: [
      CommunityMemberManagementComponent,
      GeneralResidentManagementComponent,
      ResidentManagementComponent,
  ],
  providers: [],
  bootstrap: [ResidentManagementComponent]
})
export class ResidentModule { }
