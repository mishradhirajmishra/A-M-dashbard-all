import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenIntercepterService } from './shared/token-intercepter.service';
import { RegisterComponent } from './register/register.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { JwtModule } from '@auth0/angular-jwt';








@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    JwtModule,
  ]
  , providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenIntercepterService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
