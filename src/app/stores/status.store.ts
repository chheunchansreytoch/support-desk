import { action, computed, observable } from "mobx";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IStatus } from "../models/IStatus.model";
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Router } from "@angular/router";


@Injectable({providedIn:'root'})
export class StatusStore {

  @observable public isLoading: boolean = false;
  @observable public statuses: IStatus | undefined;

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
      'Authorization': 'Bearer ' + this.statusJSONMapping()?.token
    })
  };

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.getStatuses();
  }

  statusJSONMapping() {
    const result = localStorage.getItem("status_auth") ? JSON.parse(localStorage.getItem("status_auth") || '{}') : undefined;
    return result;
  }

  @computed
  get isLoggedIn(): boolean {
    const status = localStorage.getItem('status_auth');
    return status != null ? true : false;
  }

  @action
  getStatuses(): Observable<IStatus> {
    return this.httpClient.get<IStatus>(this.endpoint + '/statuses', this.httpHeaderWithToken)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  @action
  getStatus(id, data): Observable<IStatus> {
    return this.httpClient.get<IStatus>(this.endpoint + '/statuses/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )

  }

  @action
  addStatus(data: IStatus): Observable<IStatus> {
    return this.httpClient.post<IStatus>(this.endpoint + '/statuses/create', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  // @action
  // updateUser(id, data): Observable<IManager> {
  //   return this.httpClient.put<IManager>(this.endpoint + '/managers/' + id, JSON.stringify(data), this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

  @action
  deleteStatus(id){
    return this.httpClient.delete<IStatus>(this.endpoint + '/statuses/' + id, this.httpHeader)
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
