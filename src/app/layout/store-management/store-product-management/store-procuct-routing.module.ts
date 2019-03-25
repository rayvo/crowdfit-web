
import {  StoreProductModifiedComponent } from './store-management/store-product-management/store-product-modified.component';


const routes: Routes = [
  { path: '', redirectTo: 'modified', pathMatch: 'full' },
  { path: 'modified', component:  StoreProductModifiedComponent},


];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StoreProcuctRoutingModule { }
