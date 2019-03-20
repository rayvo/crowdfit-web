import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { StaffManagementComponent } from './staff-management/staff-management.component';
import { LockerManagementComponent } from './locker-management/locker-management.component';
import { AttendenceManagementComponent } from './attendence-management/attendence-management.component';
import { ServiceCenterComponent } from './service-center/service-center.component';
import { PermissionSettingsComponent } from './permission-settings/permission-settings.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            // { path: '', redirectTo: 'menu', pathMatch: 'prefix' },
            { path: 'menu', loadChildren: './menu-management/menu.module#MenuModule' },
            { path: 'resident', loadChildren: './resident-management/resident.module#ResidentModule' },
            { path: 'staff', component: StaffManagementComponent },
            { path: 'accounting', loadChildren: './accounting-management/accounting.module#AccountingModule' },
            { path: 'store', loadChildren: './store-management/store.module#StoreModule' },
            { path: 'locker', component: LockerManagementComponent },
            { path: 'class', loadChildren: './class-management/class.module#ClassModule' },
            { path: 'attendence', component: AttendenceManagementComponent },
            { path: 'service-center', component: ServiceCenterComponent },
            { path: 'settings', component: PermissionSettingsComponent },
            /*
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
            */
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
