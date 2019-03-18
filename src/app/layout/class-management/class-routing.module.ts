import { GxManagementComponent } from '../gx-management/gx-management.component';
import { LessonManagementComponent } from '../lesson-management/lesson-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'gx', pathMatch: 'full' },
  { path: 'gx', component: GxManagementComponent},
  { path: 'lesson', component: LessonManagementComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
