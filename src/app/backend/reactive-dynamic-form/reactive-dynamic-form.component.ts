import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PassCompare } from '../../custom-Validators/password';
import { TimeCompare } from '../../custom-Validators/timeCompair';
import { BackendService } from "../../shared/backend.service";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reactive-dynamic-form',
  templateUrl: './reactive-dynamic-form.component.html',
  styleUrls: ['./reactive-dynamic-form.component.scss']
})
export class ReactiveDynamicFormComponent implements OnInit {
  title:string='Dynamic Reactive Form';

  maxDate: any = '2020-01-01';
  minDate: any = '2018-01-01';
  constructor(private router: Router, private fb: FormBuilder,private bs:BackendService,private _snackBar: MatSnackBar ) {
    this.password.valueChanges.subscribe(
      x => this.cpassword.updateValueAndValidity()
    )
  }


  ngOnInit() {
    this.addMoreTime();    
  }

  // ********************* form Validation *************
  // get time2() {
  //   return this.userProfile.get('time').controls[0].errors.invalidTime;
  // }
    get time2() {
    return this.userProfile.get('time');
  }
  get time() {
    return this.userProfile.get('time');
  }

  get username() {
    return this.userProfile.get('username');
  }
  get email() {
    return this.userProfile.get('email');
  }
  get password() {
    return this.userProfile.get('password');
  }
  get cpassword() {
    return this.userProfile.get('cpassword');
  }

  // *********************************
  userProfile = this.fb.group({
    username: ['dfre', Validators.required],
    email: ['sf@gmail.com', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    cpassword: ['', [Validators.required, PassCompare]],
    time: this.fb.array([])
  })

  get  getMoreTime(){
    return this.userProfile.get('time') as FormArray;
  }
  
  addMoreTime(){
    this.getMoreTime.push(this.fb.group({
      minTime: [''],
      maxTime: ['']
    },{validators:TimeCompare}));
  }
  delMoreTime(i){
    this.getMoreTime.removeAt(i);
  }
  updateProfile() {
    this.bs.dynamicRegister(this.userProfile.value).subscribe(
      data =>{this.openSnackBar(data.message, 'Success');this.router.navigate(['/backend/dashboard'])},
      err => console.log(err)
    )   
   }
   openSnackBar(message: string, action: string) {
     this._snackBar.open(message, action, {
       duration: 5000,
     });
   }
}
