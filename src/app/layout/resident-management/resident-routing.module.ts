import { CommunityMemberManagementComponent } from '../community-member-management/community-member-management.component';
import { GeneralResidentManagementComponent } from '../general-resident-management/general-resident-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'generalresident', pathMatch: 'full' },
  { path: 'communitymember', component: CommunityMemberManagementComponent},
  { path: 'generalresident', component: GeneralResidentManagementComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidentRoutingModule { }
