import { action, computed, observable } from "mobx";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { IChat } from "../models/IChat.model";


@Injectable({providedIn:'root'})
export class ChatStore {

  @observable public isLoading: boolean = false;
  @observable public chats: IChat | undefined;

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
    this.getChats();
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
  getChats(): Observable<IChat> {
    return this.httpClient.get<IChat>(this.endpoint + '/chats', this.httpHeaderWithToken)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  @action
  getCase(id, data): Observable<IChat> {
    return this.httpClient.get<IChat>(this.endpoint + '/chats/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  @action
  async sendEmailMessage (data) {
    try {
      this.isLoading = true;
      const result = this.httpClient.post<IChat>(this.endpoint + '/chats/send', JSON.stringify(data), this.httpHeader).toPromise();
      return result;
    } catch (error) {
      console.log(error);
    }
    return;
  }


  // @action
  // async sendEmailMessage (data: any) {
  //   try {
  //     this.isLoading = true;
  //     const result = this.httpClient.post<IChat>(this.endpoint + '/chats/send/' + data.id + JSON.stringify(data), this.httpHeader).toPromise();
  //     return result;
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   return;
  // }

  // @action
  // addCase(data: ICase): Observable<ICase> {
  //   return this.httpClient.post<ICase>(this.endpoint + '/cases/create', JSON.stringify(data), this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

  // @action
  // async updateCase(caseData: any) {
  //   console.log(caseData.id);

  //   try {
  //     const result = await this.httpClient.put<ICase>(this.endpoint + '/cases/' + caseData.id, JSON.stringify(caseData), this.httpHeader).toPromise();
  //     return result;
  //   } catch (error) {
  //     console.log(error)
  //   }

  //   return;
  // }

  // @action
  // async deleteCase(id){
  //   const result = await this.httpClient.delete<ICase>(this.endpoint + '/cases/' + id, this.httpHeader).toPromise();
  //   return result;
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
