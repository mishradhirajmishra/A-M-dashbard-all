import { Component, OnInit } from '@angular/core';
 import { BackendService } from "../../shared/backend.service";
import { NgForm} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-temp-driven-form',
  templateUrl: './temp-driven-form.component.html',
  styleUrls: ['./temp-driven-form.component.scss']
})
export class TempDrivenFormComponent implements OnInit {
  maxDate:Date=new Date('2020-01-01');
  minDate:Date= new Date('2018-01-01');
  invalidPass:Boolean = false
  title:String="Template Driven Form"
  constructor(private router:Router, private bs:BackendService,private _snackBar:MatSnackBar ) { }

  ngOnInit() {
    
  }
  chkPass(password,cpassword){
    if(password===cpassword){
      this.invalidPass=false;
    }else{
      this.invalidPass=true;
    }
    }
    sendData(data:NgForm) {
      this.bs.register(data.value).subscribe(
        data => { this.openSnackBar(data.message, 'Success');this.router.navigate(['/backend/dashboard']) },
        err => console.log(err)
      )  
     }
     openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action, {
        duration: 5000,
      });
    }
}
