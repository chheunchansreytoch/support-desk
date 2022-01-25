import { action, computed, observable } from 'mobx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ICase } from '../models/ICase.model';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CaseStore {
  @observable public isLoading: boolean = false;
  @observable public cases: ICase | undefined;
  public arrClosedCases: Array<any> = [];

  endpoint = 'http://localhost:3000/api';
  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    }),
  };

  httpHeaderWithToken = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      Authorization: 'Bearer ' + this.caseJSONMapping()?.token,
    }),
  };

  constructor(private httpClient: HttpClient, private router: Router) {
    this.getAllCases();
  }

  caseJSONMapping() {
    const result = localStorage.getItem('case_auth')
      ? JSON.parse(localStorage.getItem('case_auth') || '{}')
      : undefined;
    return result;
  }

  @computed
  get isLoggedIn(): boolean {
    const agent = localStorage.getItem('case_auth');
    return agent != null ? true : false;
  }

  @action
  getAllCases(): Observable<ICase> {
    return this.httpClient
      .get<ICase>(this.endpoint + '/cases', this.httpHeaderWithToken)
      .pipe(retry(1), catchError(this.processError));
  }

  @action
  getCase(id, data): Observable<ICase> {
    return this.httpClient
      .get<ICase>(this.endpoint + '/cases/' + id, this.httpHeader)
      .pipe(retry(1), catchError(this.processError));
  }

  @action
  async getSortCase(){
    try {
     const result = await  this.httpClient
      .get<ICase>(this.endpoint + '/cases/sort', this.httpHeader).toPromise();
      return result;
    } catch (error) {
      console.log(error);
      return;
    }

  }

  @action
  async getCases(caseId: any, agentId: any) {
    try {
      this.isLoading = true;
      const result = await this.httpClient
        .get<ICase>(
          this.endpoint + '/cases/departments/' + caseId + '/' + agentId,
          this.httpHeader
        )
        .toPromise();
      return result;
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
    return;
  }

  @action
  async getClosedCases(): Promise<any> {
    try {
      this.isLoading = true;
      const result = await this.httpClient
        .get<ICase>(this.endpoint + '/cases/closed', this.httpHeaderWithToken)
        .toPromise();
      return result;
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
  }

  @action
  async getAllClosedCases(caseId: any, agentId: any) {
    try {
      this.isLoading = true;
      const result = await this.httpClient
        .get<ICase>(
          this.endpoint + '/cases/closed/departments/' + caseId + '/' + agentId,
          this.httpHeader
        )
        .toPromise();
      return result;
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
    return;
  }

  @action
  async getClosedCase(caseId) {
    try {
      this.isLoading = true;
      const result = await this.httpClient
        .get<ICase>(this.endpoint + '/cases/closed/' + caseId, this.httpHeader)
        .toPromise();
      return result;
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
    return;
  }

  // @action
  // getOpenCases(): Observable<ICase> {
  //   return this.httpClient.get<ICase>(this.endpoint + '/cases/open', this.httpHeaderWithToken)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

  @action
  getOpenCases(id: string): Observable<ICase> {
    return this.httpClient
      .get<ICase>(this.endpoint + '/cases/open/' + id, this.httpHeaderWithToken)
      .pipe(retry(1), catchError(this.processError));
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
  async getAllOpenCase(caseId: any, agentId: any) {
    try {
      this.isLoading = true;
      const result = await this.httpClient
        .get<ICase>(
          this.endpoint + '/cases/open/departments/' + caseId + '/' + agentId,
          this.httpHeader
        )
        .toPromise();
      return result;
    } catch (error) {
      this.isLoading = false;
      console.log(error);
    }
    return;
  }

  @action
  addCase(data: ICase): Observable<ICase> {
    return this.httpClient
      .post<ICase>(
        this.endpoint + '/cases/create',
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }

  @action
  async assignCase(caseData: any) {
    console.log('abc', caseData.id);
    try {
      const result = await this.httpClient
        .put<ICase>(
          this.endpoint + '/cases/assign/' + caseData.id,
          JSON.stringify(caseData),
          this.httpHeader
        )
        .toPromise();
      return result;
    } catch (error) {
      console.log(error);
    }

    return;
  }

  @action
  async updateCase(caseData: any) {
    console.log(caseData.id);

    try {
      const result = await this.httpClient
        .put<ICase>(
          this.endpoint + '/cases/' + caseData.id,
          JSON.stringify(caseData),
          this.httpHeader
        )
        .toPromise();
      return result;
    } catch (error) {
      console.log(error);
    }

    return;
  }

  @action
  async deleteCase(id) {
    const result = await this.httpClient
      .delete<ICase>(this.endpoint + '/cases/' + id, this.httpHeader)
      .toPromise();
    return result;
  }

  processError(err: { error: { message: string }; status: any; message: any }) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }

  // Report
  @action
  async getReportCase(){
    try {
     const result = await  this.httpClient
      .get<ICase>(this.endpoint + '/reports', this.httpHeader).toPromise();
      return result;
    } catch (error) {
      console.log(error);
      return;
    }

  }
}
