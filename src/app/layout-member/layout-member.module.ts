import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutMemberRoutingModule } from './layout-member-routing.module';
import { LayoutMemberComponent } from './layout-member.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../shared';
import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatDialogModule,
  MatPaginatorModule,
  MatCardModule
} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
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

  ],
  providers: [AuthGuard],
  entryComponents: [
  ]
})
export class LayoutMemberModule { }
