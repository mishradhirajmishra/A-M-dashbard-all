import { Component, OnInit } from '@angular/core';
import { BackendService } from "../../shared/backend.service";
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-crop-upload',
  templateUrl: './image-crop-upload.component.html',
  styleUrls: ['./image-crop-upload.component.scss']
})
export class ImageCropUploadComponent implements OnInit {

  imgfile: File;
  url: any;
  title: String = "profile"
  imageChangedEvent: any = '';
  croppedImage: any = '';
  blob:Blob;
  constructor(private router: Router, private bs: BackendService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    console.log(this.blob)
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    fetch(this.croppedImage)
    .then(res => res.blob())
    .then(data =>this.blob=data)
    }

  onSelectChange(event:any){
    this.imageChangedEvent = event;
    this.imgfile = <File>event.target.files[0]; 
     this.url=this.croppedImage
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (event) => {       
       this.url= (<FileReader>event.target).result;
      }
    }
  } 
  sendData(data: NgForm) {
    var name = data.controls.username.value;
    this.imageChangedEvent='';
    const formData = new FormData();
    formData.append('username', name); 
    formData.append('image',this.blob,this.imgfile.name);  
    this.bs.profile(formData).subscribe(
      data => { this.openSnackBar(data.message, 'Success') },
      err => console.log(err)
    )
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }
}

