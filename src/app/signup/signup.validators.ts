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
      form: FormGroupDirective | NgForm | null
      ): boolean {

        // const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        // const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty );

        // return (invalidCtrl || invalidParent);
        // console.log('###############################');
        // console.log(control);
        // console.log(control.parent.value.password);
        // console.log(form);
      return (control && control.parent.get('password').value !== control.parent.get('cpassword').value && control.dirty);
  }
}

export function RepeatPasswordValidator(group: FormGroup) {
  const password = group.get('password').value;
  // const password = group.controls.password.value;
  const cpassword = group.get('cpassword').value;
  // const cpassword = group.controls.cpassword.value;
  return password === cpassword ? null : {passwordsNotEqual: true};
}



export const VNumValidation = [
  Validators.required,
  // Validators.minLength(6),
  // Validators.maxLength(6)
];

export class VNumEStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null)
    : boolean {

      // const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
      // const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty );

      // return (invalidCtrl || invalidParent);

      // return  control.dirty && control.invalid && form.invalid;
      return (control && control.parent.get('vNum').value !== control.parent.get('cVNum').value && control.dirty);
  }
}

export function VNumValidator(group: FormGroup) {
  const vNum = group.get('vNum').value;
  const cVNum = group.get('cVNum').value;
  // const vNum = group.controls.vNum.value;
  // const cVNum = group.controls.cVNum.value;
  return vNum === cVNum ? null : { vNumsNotEqual: true };
}
