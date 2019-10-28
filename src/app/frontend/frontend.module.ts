import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontendRoutingModule } from './frontend-routing.module';
import { FrontendComponent } from './frontend.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [FrontendComponent, SidebarComponent],
  imports: [
    CommonModule,
    FrontendRoutingModule
  ]
})
export class FrontendModule { }
