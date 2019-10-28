import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private as:AuthService,private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }
  login(data:NgForm){      
     this.as.login(data.value).subscribe(
      data =>{ 
        if(data.token){
          localStorage.clear();
          localStorage.setItem('token',data.token);
          window.location.replace("backend/dashboard")
          this.openSnackBar(data.message, 'Success')
        }
        else{
          this.openSnackBar(data.message, 'Try Again')
        }
      } ,
      err => console.log(err) 
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
