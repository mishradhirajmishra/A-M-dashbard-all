import { AbstractControl } from '@angular/forms';
export function ValidateUrl(control: AbstractControl) {
   if(control.value && control.value !==null && control.value !==undefined){
    if (!control.value.startsWith('https') || !control.value.includes('.io')) {
        return { validUrl: true };
      }
   }
  return null;
}