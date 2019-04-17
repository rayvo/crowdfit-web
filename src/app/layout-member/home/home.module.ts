import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';


import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatMenuModule} from '@angular/material/menu';
import { MatHeaderRow, MatHeaderRowDef, MatDividerModule, MatTableModule, MatIconModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    FormsModule,
    MatMenuModule,
    MatHeaderRow,
    MatHeaderRowDef,
    MatDividerModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule

],
declarations: [HomeComponent]
})
export class HomeModule { }
