import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreProductManagementComponent } from './store-product-management/store-product-management.component';
import { StoreSubmanagementComponent } from './store-submanagement/store-submanagement.component';
import { VendorManagementComponent } from './vendor-management/vendor-management.component';
import { StoreNoticeComponent } from './store-notice/store-notice.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full'},
  { path: 'product', // component: StoreProductManagementComponent,
 },
  { path: 'submanagement', component: StoreSubmanagementComponent },
  { path: 'vendor', component: VendorManagementComponent },
  { path: 'notice', component: StoreNoticeComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
