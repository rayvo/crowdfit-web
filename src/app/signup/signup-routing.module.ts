import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { SignupForComponent } from './signup-for/signup-for.component';
import { SignupAppliedComponent } from './signup-applied/signup-applied.component';
import { SignupFindComponent } from './signup-find/signup-find.component';
import { AuthGuard } from '../shared';

const routes: Routes = [
    { path: '', component: SignupComponent },
    { path: 'welcome', component: SignupForComponent, canActivate: [AuthGuard] },
    { path: 'find', component: SignupFindComponent, canActivate: [AuthGuard] },
    { path: 'applied', component: SignupAppliedComponent, canActivate: [AuthGuard] },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class SignupRoutingModule {
}
