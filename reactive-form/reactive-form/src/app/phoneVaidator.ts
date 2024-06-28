import { AbstractControl, ValidationErrors } from '@angular/forms';

export function phoneNumberValidator(
  control: AbstractControl
): ValidationErrors | null {
  const valid = /^[0-9]*$/.test(control.value); // Check if only digits are present
  return valid ? null : { invalidPhoneNumber: true };
}
