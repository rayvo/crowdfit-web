import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { NoAuthGuard } from './shared/guard/no-auth.guard';

const routes: Routes = [
    { path: 's', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
    { path: 'm', loadChildren: './layout-member/layout-member.module#LayoutMemberModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule', canActivate: [NoAuthGuard] },
    // { path: '', loadChildren: './layout/layout.module#LayoutModule' },
    // { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
