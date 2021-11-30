import { action, computed, observable } from "mobx";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ICase } from "../models/ICase.model";
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";


@Injectable({providedIn:'root'})
export class CaseStore {

  @observable public isLoading: boolean = false;
  @observable public cases: ICase | undefined;

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
      'Authorization': 'Bearer ' + this.caseJSONMapping()?.token
    })
  };

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.getCases();
  }

  caseJSONMapping() {
    const result = localStorage.getItem("case_auth") ? JSON.parse(localStorage.getItem("case_auth") || '{}') : undefined;
    return result;
  }

  @computed
  get isLoggedIn(): boolean {
    const agent = localStorage.getItem('case_auth');
    return agent != null ? true : false;
  }

  // @action
  // login(firstname: string, lastname: string, email: string, password: string) {
  //   try {
  //     this.httpClient.post<ICase>(
  //       this.endpoint + '/cases/login',
  //       JSON.stringify({ firstname, lastname, email, password }), this.httpHeader)
  //     .pipe(
  //       retry(1),
  //       catchError(this.processError)
  //     ).subscribe((result) => {
  //       localStorage.setItem("agent_auth", JSON.stringify(result));
  //       this.router.navigate(['/cases']);
  //       console.log("correct");
  //     });
  //   } catch(error) {
  //     console.log('login errer ln.52: ', error)
  //   }
  // }

  @action
  getCases(): Observable<ICase> {
    return this.httpClient.get<ICase>(this.endpoint + '/cases', this.httpHeaderWithToken)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  @action
  getCase(id, data): Observable<ICase> {
    return this.httpClient.get<ICase>(this.endpoint + '/cases/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )

  }

  @action
  addCustomer(data: ICase): Observable<ICase> {
    return this.httpClient.post<ICase>(this.endpoint + '/cases/create', JSON.stringify(data), this.httpHeader)
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
  deleteCustomer(id){
    return this.httpClient.delete<ICase>(this.endpoint + '/cases/' + id, this.httpHeader)
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
