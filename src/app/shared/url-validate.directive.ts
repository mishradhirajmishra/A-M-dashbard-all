
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appUrlValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: UrlValidateDirective, multi: true }]
})
export class UrlValidateDirective implements Validator{  
  @Input() url: string;
  validate(control: AbstractControl): {[key: string]: any} | null {
   
    if(control.value){
    return !control.value.startsWith('https') || !control.value.includes('.io') ?{urlErr:true}:null;                      
  }
}
}