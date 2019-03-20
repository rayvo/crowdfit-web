import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { SignupForComponent } from './signup-for/signup-for.component';
import { SignupAsAptComponent } from './signup-as-apt/signup-as-apt.component';
import { SignupAsClubComponent } from './signup-as-club/signup-as-club.component';
import { SignupAptMemberComponent } from './signup-apt-member/signup-apt-member.component';
import { SignupAptStaffComponent } from './signup-apt-staff/signup-apt-staff.component';
import { SignupAptAdminComponent } from './signup-apt-admin/signup-apt-admin.component';
import { SignupClubMemberComponent } from './signup-club-member/signup-club-member.component';
import { SignupClubStaffComponent } from './signup-club-staff/signup-club-staff.component';
import { SignupClubAdminComponent } from './signup-club-admin/signup-club-admin.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SignupRoutingModule,
    FormsModule,
  ],
  declarations: [
    SignupComponent,
    SignupForComponent,
    SignupAsAptComponent,
    SignupAsClubComponent,
    SignupAptMemberComponent,
    SignupAptStaffComponent,
    SignupAptAdminComponent,
    SignupClubMemberComponent,
    SignupClubStaffComponent,
    SignupClubAdminComponent]
})
export class SignupModule { }
