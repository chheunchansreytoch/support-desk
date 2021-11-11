import { action, computed, observable } from "mobx";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { IManager } from "../models/IManager.model";
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class ManagerStore {

  @observable public isLoading: boolean = false;
  @observable public manager: IManager | undefined;

  endpoint = 'http://localhost:3000/api';
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
    })
  };

  httpHeaderWithToken = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Authorization': 'Bearer ' + this.managerJSONMapping()?.token
    })
  };

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {

  }

  managerJSONMapping() {
    const result = localStorage.getItem("manager_auth") ? JSON.parse(localStorage.getItem("manager_auth") || '{}') : undefined;
    return result;
  }

  @computed
  get isLoggedIn(): boolean {
    const manager = localStorage.getItem('manager_auth');
    return manager != null ? true : false;
  }

  @action
  login(email: string, password: string) {
    this.httpClient.post<IManager>(this.endpoint + '/managers/login', JSON.stringify({ email, password }), this.httpHeader)
      .pipe(
        retry(1),
        catchError(this.processError)
      ).subscribe((result) => {
        localStorage.setItem("user_auth", JSON.stringify(result));
        this.router.navigate(['/']);
      });
  }

  @action
  getUsers(): Observable<IManager> {
    return this.httpClient.get<IManager>(this.endpoint + '/managers', this.httpHeaderWithToken)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  // @action
  // getUser(id, data): Observable<IManager> {
  //   return this.httpClient.get<IManager>(this.endpoint + '/managers/' + id, JSON.stringify(data), this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

  @action
  addManager(data: IManager): Observable<IManager> {
    return this.httpClient.post<IManager>(this.endpoint + '/managers/create', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  @action
  updateUser(id, data): Observable<IManager> {
    return this.httpClient.put<IManager>(this.endpoint + '/managers/' + id, JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  @action
  deleteUser(id){
    return this.httpClient.delete<IManager>(this.endpoint + '/managers/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  processError(err: { error: { message: string; }; status: any; message: any; }) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
 }

}
