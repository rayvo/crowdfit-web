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
  MatPaginatorModule
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';


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
  ],
  declarations: [
    LayoutMemberComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,

  ],
  providers: [AuthGuard],
  entryComponents: [
  ]
})
export class LayoutMemberModule { }
