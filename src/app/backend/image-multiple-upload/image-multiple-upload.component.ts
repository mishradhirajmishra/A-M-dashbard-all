import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../shared/backend.service";
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-multiple-upload',
  templateUrl: './image-multiple-upload.component.html',
  styleUrls: ['./image-multiple-upload.component.scss']
})
export class ImageMultipleUploadComponent implements OnInit {
  image: File[];
  url: any[];
  title: String = "Multiple Image"
  constructor(private router: Router, private bs: BackendService, private _snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  sendData(data: NgForm) {
    var name = data.controls.username.value;
    const formData = new FormData();
    formData.append('username', name);
    for (let index = 0; index < this.image.length; index++) {
    formData.append('image', this.image[index]);
    }
    this.bs.profile(formData).subscribe(
      data => { this.openSnackBar(data.message, 'Success') },
      err => console.log(err)
    )
  }
  onChange(event) {
    if (event.target.files) {
      this.image = <File[]>event.target.files;
      console.log(this.image)
      // var reader = new FileReader();
      // for (let index = 0; index < this.image.length; index++) {
      //   console.log(this.image[index]);
      //   reader.readAsDataURL(event.target.files[index]);
      //   reader.onload = (event) => {
      //     this.url[index] = (<FileReader>event.target).result;
      //   }
      // }
    }

    // if (event.target.files && event.target.files[0]) {
    //   var reader = new FileReader();
    //   reader.readAsDataURL(event.target.files[0]);
    //   reader.onload = (event) => {
    //     this.url = (<FileReader>event.target).result;
    //   }
    // }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}

