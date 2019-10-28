import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PassCompare } from '../custom-Validators/password';
import {AuthService  } from "../shared/auth.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   title:String='Register';
   emailErr:string;

   constructor(private router: Router, private fb: FormBuilder,private as:AuthService,private _snackBar: MatSnackBar ) {
     this.password.valueChanges.subscribe(
       x => this.cpassword.updateValueAndValidity()
     )
   }
   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
 
   ngOnInit() {
 
   }
 
   // ********************* form Validation *************
 
 
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
     username: ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     password: ['', Validators.required],
     cpassword: ['', [Validators.required, PassCompare]]    
   })
   updateProfile() {
    this.as.register(this.userProfile.value).subscribe(
      data =>{
        this.openSnackBar(data.message, 'OK')
         this.router.navigate(['../login']);
      } ,
      err => console.log(err)
    )
   
   }
   emailExist(email:any){    
    if(!email.errors){
     this.as.emailExist({email:email.value}).subscribe(
      data =>{ this.emailErr=data.message} ,
      err => console.log(err)
    )
   }
  }
}
