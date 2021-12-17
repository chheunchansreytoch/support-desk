import { action, computed, observable } from "mobx";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IPriority } from "../models/IPriority.model";
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { Router } from "@angular/router";


@Injectable({providedIn:'root'})
export class PriorityStore {

  @observable public isLoading: boolean = false;
  @observable public priorities: IPriority | undefined;

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
      'Authorization': 'Bearer ' + this.priorityJSONMapping()?.token
    })
  };

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.getPriorities();
  }

  priorityJSONMapping() {
    const result = localStorage.getItem("priority_auth") ? JSON.parse(localStorage.getItem("priority_auth") || '{}') : undefined;
    return result;
  }

  @computed
  get isLoggedIn(): boolean {
    const priority = localStorage.getItem('priority_auth');
    return priority != null ? true : false;
  }

  @action
  getPriorities(): Observable<IPriority> {
    return this.httpClient.get<IPriority>(this.endpoint + '/priorities', this.httpHeaderWithToken)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  @action
  getPriority(id, data): Observable<IPriority> {
    return this.httpClient.get<IPriority>(this.endpoint + '/priorities/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )

  }

  @action
  addPriority(data: IPriority): Observable<IPriority> {
    return this.httpClient.post<IPriority>(this.endpoint + '/priorities/create', JSON.stringify(data), this.httpHeader)
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
  deletePriority(id){
    return this.httpClient.delete<IPriority>(this.endpoint + '/priorities/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  processError(err: { error: { message: string; }; priority: any; message: any; }) {
    let message = '';
    if(err.error instanceof ErrorEvent) {
     message = err.error.message;
    } else {
     message = `Error Code: ${err.priority}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
}
