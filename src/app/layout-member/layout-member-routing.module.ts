import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutMemberComponent } from './layout-member.component';


import { AuthGuard } from '../shared';

const routes: Routes = [
    {
        path: '',
        component: LayoutMemberComponent,
        children: [
            // { path: '', redirectTo: 'menu', pathMatch: 'prefix' },
            // { path: 'menu', loadChildren: './menu-management/menu.module#MenuModule' },
            // { path: 'resident', loadChildren: './resident-management/resident.module#ResidentModule' },
            // { path: 'staff', component: StaffManagementComponent },
            // { path: 'accounting', loadChildren: './accounting-management/accounting.module#AccountingModule' },
            // { path: 'store', loadChildren: './store-management/store.module#StoreModule' },
            // { path: 'locker', component: LockerManagementComponent },
            // { path: 'class', loadChildren: './class-management/class.module#ClassModule' },
            // { path: 'attendence', component: AttendenceManagementComponent },
            // { path: 'service-center', component: ServiceCenterComponent },
            // { path: 'settings', loadChildren: './permission-settings/permission-settings.module#PermissionSettingsModule' },

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
        ],
        // canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
