import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

const API_ROOT = "https://reqres.in/api"; ///users?page=4

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private http: HttpClient) { }

  getCars(): Observable<any> {
    return this.http.get( API_ROOT +  "/cars")
    .pipe(catchError((error: any)=> Observable.throw(error.json())));
  }
}
