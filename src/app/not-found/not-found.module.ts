import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    MatCardModule
  ],
  declarations: [NotFoundComponent]
})
export class NotFoundModule { }
