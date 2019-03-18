import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { GxManagementComponent } from './gx-management/gx-management.component';
import { LessonManagementComponent } from './lesson-management/lesson-management.component';
import { ClassManagementComponent } from './class-management.component';
import { ClassRoutingModule } from './class-routing.module';


@NgModule({
  imports: [
    ClassRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ClassRoutingModule
  ],
  declarations: [
      ClassManagementComponent,
      GxManagementComponent,
      LessonManagementComponent,
  ],
  providers: [],
  bootstrap: [ClassManagementComponent]
})
export class ClassModule { }
