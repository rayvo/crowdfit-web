import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutMemberRoutingModule } from './layout-member-routing.module';
import { LayoutMemberComponent } from './layout-member.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { AuthGuard } from '../shared';
import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatDialogModule,
  MatCardModule,
  MatHeaderRow,
  MatHeaderRowDef,

} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';

import { HomeComponent } from './home/home.component';
import { DanziComponent } from './danzi/danzi.component';
import { CommunityComponent } from './community/community.component';
import { VoteComponent } from './vote/vote.component';
import { CultureComponent } from './culture/culture.component';
import { LifeSupportComponent } from './life-support/life-support.component';
import { FitMusicComponent } from './fit-music/fit-music.component';
import { FitVideoComponent } from './fit-video/fit-video.component';
import { SmartAdministrativeExpensesComponent } from './smart-administrative-expenses/smart-administrative-expenses.component';
import { MandatoryDisclosureComponent } from './mandatory-disclosure/mandatory-disclosure.component';
import { LibraryComponent } from './library/library.component';
import { SetPermissionsComponent } from './set-permissions/set-permissions.component';
@NgModule({
  imports: [
    CommonModule,
    LayoutMemberRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
  ],
  declarations: [
    LayoutMemberComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    DanziComponent,
    CommunityComponent,
    VoteComponent,
    CultureComponent,
    SmartAdministrativeExpensesComponent,
    MandatoryDisclosureComponent,
    LibraryComponent,
    LifeSupportComponent,
    FitMusicComponent,
    FitVideoComponent,
    SetPermissionsComponent,
  ],
  providers: [AuthGuard],
  entryComponents: [
  ]
})
export class LayoutMemberModule { }
