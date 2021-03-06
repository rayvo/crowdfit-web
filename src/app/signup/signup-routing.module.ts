import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { SignupAppliedComponent } from './signup-applied/signup-applied.component';
import { SignupFindComponent } from './signup-find/signup-find.component';
import { AuthGuard } from '../shared';
import { NoAuthGuard } from '../shared/guard/no-auth.guard';
import { SignupCeoComponent } from './signup-ceo/signup-ceo.component';

const routes: Routes = [

    { path: '', component: SignupComponent, canActivate: [NoAuthGuard]},
    { path: 'apply', component: SignupFindComponent, canActivate: [AuthGuard] },
    { path: 'applied', component: SignupAppliedComponent, canActivate: [AuthGuard] },
    { path: 'setup', component: SignupCeoComponent /* Add a proper guard so only CEO can view */ },

    /*
    { path: '', component: SignupComponent },
    { path: 'apply', component: SignupFindComponent },
    { path: 'applied', component: SignupAppliedComponent },*/

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class SignupRoutingModule {
}
