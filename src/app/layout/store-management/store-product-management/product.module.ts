import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';


import { StoreProductManagementComponent } from './store-product-management.component';
import { StoreProductRegistrationComponent
} from './store-product-registration/store-product-registration.component';
import { StoreProductEditComponent } from './store-product-edit/store-product-edit.component';
import { StoreProductPhotosComponent } from './store-product-photos/store-product-photos.component';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    FormsModule,
    HttpClientModule,
    ProductRoutingModule,
  ],
  declarations: [
      StoreProductManagementComponent,
      StoreProductRegistrationComponent,
      StoreProductEditComponent,
      StoreProductPhotosComponent,
  ],
  providers: [],
  bootstrap: [StoreProductManagementComponent]
})
export class ProductModule { }
