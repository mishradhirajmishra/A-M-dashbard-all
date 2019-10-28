
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appPasswordValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true }]
})
export class PasswordValidatorDirective implements Validator {
  // @Input() hobby: string;
  password:String = '';
  cpassword:String = '';
  validate(control: AbstractControl): { [key: string]: any } | null {
    if(control.root.get('cpassword')){
      this.cpassword =control.root.get('cpassword').value;
    }
    if(control.root.get('password')){
      this.password = control.root.get('password').value;
    }

    if ( this.cpassword !==this.password) {      
      return { invalidPass: true };
    }
    else {
      return null;
    }
  }
}