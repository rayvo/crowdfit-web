
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

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
    StoreProcuctRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule
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
