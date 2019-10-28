import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMultipleUploadComponent } from './image-multiple-upload.component';

describe('ImageMultipleUploadComponent', () => {
  let component: ImageMultipleUploadComponent;
  let fixture: ComponentFixture<ImageMultipleUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageMultipleUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageMultipleUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
