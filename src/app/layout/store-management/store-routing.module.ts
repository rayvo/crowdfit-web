import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreProductManagementComponent } from './store-product-management/store-product-management.component';
import { VendorManagementComponent } from './vendor-management/vendor-management.component';
import { StoreNoticeComponent } from './store-notice/store-notice.component';
import { StoreProductModifiedComponent } from './store-product-management/store-product-modified/store-product-modified.component';
import { StoreProductEnrollmentComponent } from './store-product-management/store-product-enrollment/store-product-enrollment.component';
import { StorePicStorageComponent } from './store-product-management/store-pic-storage/store-pic-storage.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full'},
  { path: 'product', component: StoreProductManagementComponent,
    children: [
        { path: '', redirectTo: 'modified', pathMatch: 'full' },
        { path: 'modified', component:  StoreProductModifiedComponent},
        { path: 'enrollment', component:  StoreProductEnrollmentComponent},
        { path: 'picstorage', component:  StorePicStorageComponent},
    ]
  },
  { path: 'vendor', component: VendorManagementComponent },
  { path: 'notice', component: StoreNoticeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
