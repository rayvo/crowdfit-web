import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorInformationComponent } from './vendor-information/vendor-information.component';
import { VendorApprovalInformationComponent } from './vendor-approval-information/vendor-approval-information.component';

const routes: Routes = [
  { path: '', redirectTo: 'information', pathMatch: 'full' },
  { path: 'information', component: VendorInformationComponent},
  { path: 'approvalinfo', component: VendorApprovalInformationComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
