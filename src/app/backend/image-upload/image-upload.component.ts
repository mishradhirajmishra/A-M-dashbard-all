import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../shared/backend.service";
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  image: File;
  url: any;
  title: String = "profile"
  constructor(private router: Router, private bs: BackendService, private _snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  sendData(data: NgForm) {
    var name = data.controls.username.value;
    const formData = new FormData();
    formData.append('username', name);
    formData.append('image', this.image);
    this.bs.profile(formData).subscribe(
      data => { this.openSnackBar(data.message, 'Success') },
      err => console.log(err)
    )
  }
  onChange(event) {
    this.image = <File>event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
    }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}

