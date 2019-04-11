import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
   HomeRoutingModule,
    FormsModule,
],
declarations: [HomeComponent]
})
export class HomeModule { }
