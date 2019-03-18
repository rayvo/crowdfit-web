import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { WageManagementComponent } from './wage-management/wage-management.component';
import { SalesManagementComponent } from './sales-management/sales-management.component';
import { CostNoticeManagementComponent } from './cost-notice-management/cost-notice-management.component';
import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingManagementComponent } from './accounting-management.component';

@NgModule({
  imports: [
    AccountingRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AccountingRoutingModule,
  ],
  declarations: [
      WageManagementComponent,
      SalesManagementComponent,
      CostNoticeManagementComponent,
      AccountingManagementComponent
  ],
  providers: [],
  bootstrap: [AccountingManagementComponent]
})
export class AccoutingModule { }
