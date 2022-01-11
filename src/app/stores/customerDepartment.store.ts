import { action, computed, observable } from "mobx";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { ICustomerDepartment } from "../models/ICustomerDepartment.model";

@Injectable({providedIn:'root'})
export class CustomerDepartmentStore {

  @observable public isLoading: boolean = false;
  @observable public customerDepartment: ICustomerDepartment | undefined;

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
      //'Authorization': 'Bearer ' + this.customerJSONMapping()?.token
    })
  };

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.getCustomerDepartments();;
  }

  // customerJSONMapping() {
  //   const result = localStorage.getItem("customer_auth") ? JSON.parse(localStorage.getItem("customer_auth") || '{}') : undefined;
  //   return result;
  // }

  @action
  getCustomerDepartments(): Observable<ICustomerDepartment> {
    return this.httpClient.get<ICustomerDepartment>(this.endpoint + '/customerDepartments', this.httpHeaderWithToken)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  @action
  getCustomerDepartment(id, data): Observable<ICustomerDepartment> {
    return this.httpClient.get<ICustomerDepartment>(this.endpoint + '/customerDepartments/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )

  }

  // @action
  // addCustomer(data: ICustomerDepartment): Observable<ICustomerDepartment> {
  //   return this.httpClient.post<ICustomerDepartment>(this.endpoint + '/customerDepartments/create', JSON.stringify(data), this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

  // @action
  // deleteCustomer(id){
  //   return this.httpClient.delete<ICustomerDepartment>(this.endpoint + '/customerDepartments/' + id, this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

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
