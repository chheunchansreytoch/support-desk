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
  getClosedCases(): Observable<ICase> {
    return this.httpClient.get<ICase>(this.endpoint + '/cases/closed', this.httpHeaderWithToken)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  @action
  async getClosedCase(caseId) {
    try {
      this.isLoading = true;
      const result = await this.httpClient.get<ICase>(this.endpoint + '/cases/closed/' + caseId, this.httpHeader).toPromise();
      return result;
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
    return;
  }

  @action
  getOpenCases(): Observable<ICase> {
    return this.httpClient.get<ICase>(this.endpoint + '/cases/open', this.httpHeaderWithToken)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }


  // @action
  // async getOpenCases() {
  //   try {
  //     this.isLoading = true;
  //     const result = await this.httpClient.get<ICase>(this.endpoint + '/cases/open', this.httpHeaderWithToken).toPromise();
  //     return result;
  //   } catch (error) {
  //     this.isLoading = false;
  //     console.log(error);

  //   }
  //   return;
  // }

  @action
  async getOpenCase(caseId) {
    try {
      this.isLoading = true;
      const result = await this.httpClient.get<ICase>(this.endpoint + '/cases/open/' + caseId, this.httpHeader).toPromise();
      return result;
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
    return;
  }

  @action
  addCase(data: ICase): Observable<ICase> {
    return this.httpClient.post<ICase>(this.endpoint + '/cases/create', JSON.stringify(data), this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  @action
  async updateCase(caseData: any) {
    console.log(caseData.id);

    try {
      const result = await this.httpClient.put<ICase>(this.endpoint + '/cases/' + caseData.id, JSON.stringify(caseData), this.httpHeader).toPromise();
      return result;
    } catch (error) {
      console.log(error)
    }

    return;
  }

  @action
  async deleteCase(id){
    const result = await this.httpClient.delete<ICase>(this.endpoint + '/cases/' + id, this.httpHeader).toPromise();
    return result;
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
