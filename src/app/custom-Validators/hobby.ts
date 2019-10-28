import { AbstractControl, FormGroup } from '@angular/forms';
export function HobbyValidation(control: FormGroup) {
    var  reading_book = control.controls.reading_book.value;
    var  watching_moove = control.controls.watching_moove.value; 
    var  swimming = control.controls.swimming.value;
    if(!(reading_book || watching_moove || swimming) )      
        {  return { invalidHobby: true };   }
   return null;
}