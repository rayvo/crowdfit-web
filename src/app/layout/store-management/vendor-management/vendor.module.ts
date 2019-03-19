import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


import { VendorManagementComponent } from './vendor-management.component';
import { VendorInformationComponent } from './vendor-information/vendor-information.component';
import { VendorApprovalInformationComponent } from './vendor-approval-information/vendor-approval-information.component';
import { VendorRoutingModule } from './vendor-routing.module';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    FormsModule,
    HttpClientModule,
    VendorRoutingModule,
  ],
  declarations: [
      VendorManagementComponent,
      VendorInformationComponent,
      VendorApprovalInformationComponent,
  ],
  providers: [],
  bootstrap: [VendorManagementComponent]
})
export class VendorModule { }
