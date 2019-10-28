import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../shared/auth.guard";
import { BackendComponent } from './backend.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveDynamicFormComponent } from './reactive-dynamic-form/reactive-dynamic-form.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageCropUploadComponent } from './image-crop-upload/image-crop-upload.component';
import { ImageMultipleUploadComponent } from './image-multiple-upload/image-multiple-upload.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
import { ChartsComponent } from './charts/charts.component';
import { PaypallComponent } from './paypall/paypall.component';


const routes: Routes = [
  { path: '', component: BackendComponent  ,
    children:[
      {path:'dashboard',component:DashboardComponent,canActivateChild:[AuthGuard]},
      {path:'r-form',component:ReactiveFormComponent,canActivateChild:[AuthGuard]},
      {path:'r-d-form',component:ReactiveDynamicFormComponent,canActivateChild:[AuthGuard]},
      {path:'t-form',component:TempDrivenFormComponent,canActivateChild:[AuthGuard]},
      {path:'image-upload',component:ImageUploadComponent,canActivateChild:[AuthGuard]},
      {path:'image-crop-upload',component:ImageCropUploadComponent,canActivateChild:[AuthGuard]},
      {path:'image-multi-upload',component:ImageMultipleUploadComponent,canActivateChild:[AuthGuard]},
      {path:'google-map',component:GooglemapComponent,canActivateChild:[AuthGuard]},
      {path:'charts',component:ChartsComponent,canActivateChild:[AuthGuard]},
      {path:'paypal',component:PaypallComponent,canActivateChild:[AuthGuard]},
    ],canActivate:[AuthGuard]
   }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
