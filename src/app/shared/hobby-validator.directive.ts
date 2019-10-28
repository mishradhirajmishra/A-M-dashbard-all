import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appHobbyValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: HobbyValidatorDirective, multi: true }]
})
export class HobbyValidatorDirective implements Validator {
  @Input() hobby: string;
  reading_book: boolean = false;
  watching_moove: boolean = false;
  sweeming: boolean = false;
  validate(control: AbstractControl): { [key: string]: any } | null {
    if (control.get('reading_book')) {
      this.reading_book = control.get('reading_book').value;
    }
    if (control.get('watching_moove')) {
      this.watching_moove = control.get('watching_moove').value;
    }
    if (control.get('sweeming')) {
      this.sweeming = control.get('sweeming').value;
    
    }
    if ( !(this.reading_book || this.watching_moove || this.sweeming)) {
     
      return { invalidHobby: true };
    }
    else {
      return null;
    }
  }
}