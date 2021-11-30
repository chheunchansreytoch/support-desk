import { action, computed, observable } from "mobx";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ICustomer } from "../models/ICustomer.model";
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class CustomerStore {

  @observable public isLoading: boolean = false;
  @observable public customer: ICustomer | undefined;

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
      'Authorization': 'Bearer ' + this.customerJSONMapping()?.token
    })
  };

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.getCustomers();;
  }

  customerJSONMapping() {
    const result = localStorage.getItem("customer_auth") ? JSON.parse(localStorage.getItem("customer_auth") || '{}') : undefined;
    return result;
  }

  @computed
  get isLoggedIn(): boolean {
    const customer = localStorage.getItem('customer_auth');
    return customer != null ? true : false;
  }

  // @action
  // login(firstname: string, lastname: string, email: string, password: string) {
  //   try {
  //     this.httpClient.post<ICustomer>(
  //       this.endpoint + '/customers/login',
  //       JSON.stringify({ firstname, lastname, email, password }), this.httpHeader)
  //     .pipe(
  //       retry(1),
  //       catchError(this.processError)
  //     ).subscribe((result) => {
  //       localStorage.setItem("customer_auth", JSON.stringify(result));
  //       this.router.navigate(['/admin-homepage']);
  //       console.log("correct");
  //     });
  //   } catch(error) {
  //     console.log('login errer ln.52: ', error)
  //   }
  // }

  @action
  getCustomers(): Observable<ICustomer> {
    return this.httpClient.get<ICustomer>(this.endpoint + '/customers', this.httpHeaderWithToken)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  @action
  getCustomer(id, data): Observable<ICustomer> {
    return this.httpClient.get<ICustomer>(this.endpoint + '/customers/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )

  }

  @action
  addCustomer(data: ICustomer): Observable<ICustomer> {
    return this.httpClient.post<ICustomer>(this.endpoint + '/customers/create', JSON.stringify(data), this.httpHeader)
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
    return this.httpClient.delete<ICustomer>(this.endpoint + '/customers/' + id, this.httpHeader)
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
