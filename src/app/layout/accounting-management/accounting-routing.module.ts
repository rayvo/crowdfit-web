import { CostNoticeManagementComponent } from './cost-notice-management/cost-notice-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesManagementComponent } from './sales-management/sales-management.component';
import { WageManagementComponent } from './wage-management/wage-management.component';

const routes: Routes = [
  { path: '', redirectTo: 'wage', pathMatch: 'full' },
  { path: 'wage', component: WageManagementComponent},
  { path: 'sales', component: SalesManagementComponent},
  { path: 'cost-notice', component: CostNoticeManagementComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
