import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { SignupForComponent } from './signup-for/signup-for.component';
import { SignupAsAptComponent } from './signup-as-apt/signup-as-apt.component';
import { SignupAsClubComponent } from './signup-as-club/signup-as-club.component';
import { SignupAptMemberComponent } from './signup-as-apt/signup-apt-member/signup-apt-member.component';
import { SignupAptAdminComponent } from './signup-as-apt/signup-apt-admin/signup-apt-admin.component';
import { SignupAptStaffComponent } from './signup-as-apt/signup-apt-staff/signup-apt-staff.component';
import { SignupClubMemberComponent } from './signup-as-club/signup-club-member/signup-club-member.component';
import { SignupClubAdminComponent } from './signup-as-club/signup-club-admin/signup-club-admin.component';
import { SignupClubStaffComponent } from './signup-as-club/signup-club-staff/signup-club-staff.component';

const routes: Routes = [
    { path: '', component: SignupComponent },
    { path: 'welcome', component: SignupForComponent },
    { path: 'apt', component: SignupAsAptComponent},
    { path: 'apt-member', component: SignupAptMemberComponent },
    { path: 'apt-staff', component: SignupAptStaffComponent },
    { path: 'apt-admin', component: SignupAptAdminComponent },
    { path: 'club', component: SignupAsClubComponent },
    { path: 'club-member', component: SignupClubMemberComponent },
    { path: 'club-staff', component: SignupClubStaffComponent },
    { path: 'club-admin', component: SignupClubAdminComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignupRoutingModule {
}
