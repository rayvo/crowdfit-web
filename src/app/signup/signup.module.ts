import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDialogModule,
  MatButtonToggleModule,
  MatStepperModule,
  MatButtonModule,
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SignupAppliedComponent } from './signup-applied/signup-applied.component';
import { SignupFindComponent } from './signup-find/signup-find.component';
import { SignupFindJusoComponent } from './signup-find/signup-find-juso.component';



@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SignupRoutingModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [
    SignupComponent,
    SignupAppliedComponent,
    SignupFindComponent,
    SignupFindJusoComponent,
  ],
  entryComponents: [
    SignupFindJusoComponent
  ]
})
export class SignupModule { }
