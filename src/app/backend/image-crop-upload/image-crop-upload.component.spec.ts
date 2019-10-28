import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCropUploadComponent } from './image-crop-upload.component';

describe('ImageCropUploadComponent', () => {
  let component: ImageCropUploadComponent;
  let fixture: ComponentFixture<ImageCropUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageCropUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCropUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
