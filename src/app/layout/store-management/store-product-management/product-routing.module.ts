import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreProductRegistrationComponent } from './store-product-registration/store-product-registration.component';
import { StoreProductEditComponent } from './store-product-edit/store-product-edit.component';
import { StoreProductPhotosComponent } from './store-product-photos/store-product-photos.component';

const routes: Routes = [
  { path: '', redirectTo: 'registration', pathMatch: 'full' },
  { path: 'registration', component: StoreProductRegistrationComponent},
  { path: 'edit', component: StoreProductEditComponent},
  { path: 'photos', component: StoreProductPhotosComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
