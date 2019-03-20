
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


import { StoreManagementComponent } from './store-management.component';
import { StoreProductManagementComponent } from './store-product-management/store-product-management.component';
import { StoreSubmanagementComponent } from './store-submanagement/store-submanagement.component';
import { VendorManagementComponent } from './vendor-management/vendor-management.component';
import { StoreNoticeComponent } from './store-notice/store-notice.component';
import { StoreRoutingModule } from './store-routing.module';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    FormsModule,
    HttpClientModule,
    StoreRoutingModule,
  ],
  declarations: [
      StoreManagementComponent,
      StoreProductManagementComponent,
      StoreSubmanagementComponent,
      VendorManagementComponent,
      StoreNoticeComponent,
  ],
  providers: [],
  bootstrap: [StoreManagementComponent]
})
export class StoreModule { }
