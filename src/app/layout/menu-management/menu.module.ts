import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';


import { CommunityComponent } from './community/community.component';
import { CultureCourseComponent } from './culture-course/culture-course.component';
import { DanjiManagementComponent } from './danji-management/danji-management.component';
import { MenuManagementComponent } from './menu-management.component';
import { MenuRoutingModule } from './menu-routing.module';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbAlertModule,
    FormsModule,
    HttpClientModule,
    MenuRoutingModule,
    MatCheckboxModule
  ],
  declarations: [
    CommunityComponent,
    CultureCourseComponent,
    DanjiManagementComponent,
    MenuManagementComponent,
  ],
  providers: [],
  bootstrap: [MenuManagementComponent]
})
export class MenuModule { }
