import { BrowserModule } from '@angular/platform-browser';
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
import { VendorModule } from './vendor-management/vendor.module';
import { ProductModule } from './store-product-management/product.module';
import { VendorRoutingModule } from './vendor-management/vendor-routing.module';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    FormsModule,
    HttpClientModule,
    StoreRoutingModule,
    VendorModule,
    ProductModule,
  ],
  declarations: [
      StoreManagementComponent,
      StoreSubmanagementComponent,
      StoreNoticeComponent,
      VendorManagementComponent,
      StoreProductManagementComponent,
  ],
  providers: [],
  bootstrap: [StoreManagementComponent]
})
export class StoreModule { }
