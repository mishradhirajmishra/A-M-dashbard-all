import { AbstractControl } from '@angular/forms';
export function ValidateMinMax(control: AbstractControl) {
   if(control.value && control.value !==null && control.value !==undefined){
    var  maxDate= new Date('2020-01-01').getTime();
    var  minDate= new Date('2018-01-01').getTime();
    var  ControlDate = new Date(control.value).getTime();  
    if (maxDate < ControlDate || minDate > ControlDate) {
          return { invalidDate: true };       
     }
   }
  return null;
}