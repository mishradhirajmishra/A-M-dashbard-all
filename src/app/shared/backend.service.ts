import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  ServerUrl:String=environment.url;
  errorData: {};
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  httpOptions2 = { headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }) };
  constructor(private http: HttpClient) { 
   }
  // ----------------------------------------------------------------------------

   register(formdata:any) {
    return this.http.post<any>(this.ServerUrl + 'users/register', formdata, this.httpOptions).pipe(catchError(this.handleError));
  }
  
  dynamicRegister(formdata:any) {
    return this.http.post<any>(this.ServerUrl + 'users/dynamic-register', formdata, this.httpOptions).pipe(catchError(this.handleError));
  }
  profile(formdata:any) {
    return this.http.post<any>(this.ServerUrl + 'users/profile', formdata ).pipe(catchError(this.handleError));
  }
  // ----------------------------------------------------------------------------

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
}