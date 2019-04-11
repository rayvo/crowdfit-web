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
  MatListModule,
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { SignupAppliedComponent } from './signup-applied/signup-applied.component';
import { SignupFindComponent } from './signup-find/signup-find.component';
import { SignupFindJusoComponent } from './signup-find/signup-find-juso.component';
import { SignupCeoComponent } from './signup-ceo/signup-ceo.component';
import { UserService } from '../services/user.service';
import { SignupCeoEditPopupComponent } from './signup-ceo/signup-ceo-edit-popup.component';
import { SignupCeoAddPopupComponent } from './signup-ceo/signup-ceo-add-popup.component';
import { SignupCeoDelPopupComponent } from './signup-ceo/signup-ceo-del-popup.component';



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
    MatListModule,
  ],
  declarations: [
    SignupComponent,
    SignupAppliedComponent,
    SignupFindComponent,
    SignupFindJusoComponent,
    SignupCeoComponent,
    SignupCeoEditPopupComponent,
    SignupCeoAddPopupComponent,
    SignupCeoDelPopupComponent,
  ],
  entryComponents: [
    SignupFindJusoComponent,
    SignupCeoEditPopupComponent,
    SignupCeoAddPopupComponent,
    SignupCeoDelPopupComponent,
  ],
  providers: [UserService]
})
export class SignupModule { }
