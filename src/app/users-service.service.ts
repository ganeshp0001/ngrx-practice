import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const API_ROOT = "https://reqres.in/api"; ///users?page=4
@Injectable({
  providedIn: 'root',
})
export class UsersServiceService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get( API_ROOT +  "/users")
    .pipe(catchError((error: any)=> Observable.throw(error.json())));
  }
}
