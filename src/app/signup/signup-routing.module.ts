import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { SignupForComponent } from './signup-for/signup-for.component';
import { SignupAppliedComponent } from './signup-applied/signup-applied.component';
import { SignupAsComponent } from './signup-as/signup-as.component';
import { SignupFindComponent } from './signup-find/signup-find.component';

const routes: Routes = [
    { path: '', component: SignupComponent },
    { path: 'welcome', component: SignupForComponent },
    { path: 'as', component: SignupAsComponent },
    { path: 'find', component: SignupFindComponent },
    { path: 'applied', component: SignupAppliedComponent },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignupRoutingModule {
}
