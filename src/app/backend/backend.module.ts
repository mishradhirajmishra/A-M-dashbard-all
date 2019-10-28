import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendRoutingModule } from './backend-routing.module';
import { BackendComponent } from './backend.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BMaterialModule } from './b-material/b-material.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard } from '../shared/auth.guard';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveDynamicFormComponent } from './reactive-dynamic-form/reactive-dynamic-form.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { UrlValidateDirective } from '../shared/url-validate.directive';
import { HobbyValidatorDirective } from '../shared/hobby-validator.directive';
import { TimeValidatorDirective } from '../shared/time-validator.directive';
import { PasswordValidatorDirective } from '../shared/password-validator.directive';

import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageCropUploadComponent } from './image-crop-upload/image-crop-upload.component';
import { ImageMultipleUploadComponent } from './image-multiple-upload/image-multiple-upload.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { AgmCoreModule } from '@agm/core';
import { ChartsComponent } from './charts/charts.component';
import { ChartsModule } from 'ng2-charts';
import { PaypallComponent } from './paypall/paypall.component';

@NgModule({
  declarations: [
    BackendComponent,
    PasswordValidatorDirective,
    TimeValidatorDirective,
    HobbyValidatorDirective,
    UrlValidateDirective,
    SidebarComponent,
    DashboardComponent,
    ReactiveFormComponent,
    ReactiveDynamicFormComponent,
    TempDrivenFormComponent,
    ImageUploadComponent,
    ImageCropUploadComponent,
    ImageMultipleUploadComponent,
    GooglemapComponent,
    ChartsComponent,
    PaypallComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    ImageCropperModule,
    BackendRoutingModule,
    BMaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC1XvwlTlmMM1h2yTaYdoMBK0I8DuhpPfs'
    }),
    ChartsModule,
  ],
  providers: [AuthGuard],

})
export class BackendModule { }
