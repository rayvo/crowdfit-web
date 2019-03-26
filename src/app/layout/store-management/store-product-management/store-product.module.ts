
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


import { StoreProductEnrollmentComponent } from './store-product-enrollment/store-product-enrollment.component';
import { StoreProductModifiedComponent } from './store-product-modified/store-product-modified.component';
import { StorePicStorageComponent } from './store-pic-storage/store-pic-storage.component';
import { StoreProcuctRoutingModule } from './store-procuct-routing.module';
import { StoreProductManagementComponent } from './store-product-management.component';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    FormsModule,
    HttpClientModule,
    StoreProcuctRoutingModule
  ],
  declarations: [
      StorePicStorageComponent,
      StoreProductModifiedComponent,
      StoreProductEnrollmentComponent,
      StoreProductManagementComponent,
  ],
  providers: [],
  bootstrap: [StoreProductManagementComponent]
})
export class StoreProductModule { }
