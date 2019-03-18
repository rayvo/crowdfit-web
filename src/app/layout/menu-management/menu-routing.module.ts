import { BulletinBoardManagementComponent } from '../bulletin-board-management/bulletin-board-management.component';
import { CommunityComponent } from './community/community.component';
import { CultureCourseComponent } from './culture-course/culture-course.component';
import { DanjiManagementComponent } from './danji-management/danji-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bulletinboard', pathMatch: 'full' },
  { path: 'bulletinboard', component: BulletinBoardManagementComponent},
  { path: 'danji', component: DanjiManagementComponent},
  { path: 'community', component: CommunityComponent},
  { path: 'culturecourse', component: CultureCourseComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
