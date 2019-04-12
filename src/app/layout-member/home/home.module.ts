import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';

import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MatMenuModule,
],
declarations: [HomeComponent]
})
export class HomeModule { }
