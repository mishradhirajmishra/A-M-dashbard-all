import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appTimeValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: TimeValidatorDirective, multi: true }]
})
export class TimeValidatorDirective implements Validator {
  // @Input() hobby: string;
  minTime: boolean = false;
  maxTime: boolean = false;
  validate(control: AbstractControl): { [key: string]: any } | null {
    if (control.get('minTime')) {
      this.minTime = control.get('minTime').value;
    }
    if (control.get('maxTime')) {
      this.maxTime = control.get('maxTime').value;
    }

    if ( this.minTime >= this.maxTime) {
      
      return { invalidTime: true };
    }
    else {
      return null;
    }
  }
}