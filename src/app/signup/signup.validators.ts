import {
    FormGroup,
    FormControl,
    Validators,
    FormBuilder,
    FormGroupDirective,
    NgForm
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export const PasswordValidation = [
  Validators.required,
  Validators.minLength(6), // TODO: Check reqs again
  Validators.maxLength(24), // TODO: Check reqs again
];

export class RepeatPasswordEStateMatcher implements ErrorStateMatcher {
  isErrorState(
      control: FormControl | null,
      form: FormGroupDirective | NgForm | null): boolean {

        const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty );

        return (invalidCtrl || invalidParent);
  }
}
export function RepeatPasswordValidator(group: FormGroup) {
  const password = group.controls.password.value;
  const cpassword = group.controls.cpassword.value;

  return password === cpassword ? null : { passwordsNotEqual: true };
}
