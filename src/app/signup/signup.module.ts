import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule, MatInputModule, MatIconModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SignupForComponent } from './signup-for/signup-for.component';
import { SignupAsComponent } from './signup-as/signup-as.component';
import { SignupAppliedComponent } from './signup-applied/signup-applied.component';
import { SignupFindComponent } from './signup-find/signup-find.component';



@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SignupRoutingModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,

  ],
  declarations: [
    SignupComponent,
    SignupForComponent,
    SignupAsComponent,
    SignupAppliedComponent,
    SignupFindComponent,
  ]
})
export class SignupModule { }
