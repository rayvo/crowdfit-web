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
  MatSelectModule,
  MatOptionModule,
  MatDividerModule,
  MatListModule,
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {
  MatExpansionModule,
} from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SignupAppliedComponent } from './signup-applied/signup-applied.component';
import { SignupFindComponent } from './signup-find/signup-find.component';
import { SignupFindJusoComponent } from './signup-find/signup-find-juso.component';
import { SignupCeoComponent } from './signup-ceo/signup-ceo.component';
import { UserService } from '../services/user.service';



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
    MatCardModule,
    MatSelectModule,
    MatOptionModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
  ],
  declarations: [
    SignupComponent,
    SignupAppliedComponent,
    SignupFindComponent,
    SignupFindJusoComponent,
    SignupCeoComponent,
  ],
  entryComponents: [
    SignupFindJusoComponent
  ],
  providers: [UserService]
})
export class SignupModule { }
