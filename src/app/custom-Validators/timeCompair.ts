import { AbstractControl, FormGroup } from '@angular/forms';
export function TimeCompare(control: FormGroup) {
    var  t1 = control.controls.minTime.value.split(":");
    var t2 = control.controls.maxTime.value.split(":");
    var maxTime = parseInt(t1[0])*60 + parseInt(t1[1]);
    var minTime = parseInt(t2[0])*60 + parseInt(t2[1]);
    if(!(minTime  > maxTime) )      
        {  return { invalidTime: true };   }
   return null;
}