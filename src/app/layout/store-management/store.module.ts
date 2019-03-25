
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
import { StoreProductEnrollmentComponent } from './store-product-management/store-product-enrollment/store-product-enrollment.component';
import { StoreProductModifiedComponent } from './store-product-management/store-product-modified/store-product-modified.component';
import { StorePicStorageComponent } from './store-product-management/store-pic-storage/store-pic-storage.component';


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
      StoreProductEnrollmentComponent,
      StoreProductModifiedComponent,
      StorePicStorageComponent,
  ],
  providers: [],
  bootstrap: [StoreManagementComponent]
})
export class StoreModule { }
