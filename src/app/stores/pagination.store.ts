import { action, computed, observable } from "mobx";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { IAgent } from "../models/IAgent.model";
import { ICase } from "../models/ICase.model";


@Injectable({providedIn:'root'})
export class PaginationStore {

  @observable public isLoading: boolean = false;
  @observable public arrAgent: Array<IAgent> = [];
  @observable public arrCase: Array<ICase> = [];

  @observable public length: number = 100;
  @observable public pageIndex: number = 1;
  @observable public pageSize: number = 10;
  @observable public previousPageIndex: number = 0;

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
      'Authorization': 'Bearer ' + this.getJSONToken()?.token
    })
  };

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  getJSONToken() {
    const result = localStorage.getItem("manager_auth") ? JSON.parse(localStorage.getItem("manager_auth") || '{}') : undefined;
    return result;
  }

  @action
  async getAgentsWithPagination(pageSize: number, pageIndex: number, keyword: string) {
    this.isLoading = true;
    const result = await this.httpClient.get<any>(this.endpoint + `/agents/${pageSize}/${pageIndex}/${keyword || 'null'}`, this.httpHeaderWithToken).toPromise();
    const { agents, count } = result;

    this.length = count;
    this.arrAgent = agents;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex;

    this.isLoading = false;
    return result;
  }

  @action
  async getCasesWithPagination(pageSize: number, pageIndex: number, keyword: string) {
    this.isLoading = true;
    const result = await this.httpClient.get<any>(this.endpoint + `/cases/${pageSize}/${pageIndex}/${keyword || 'null'}`, this.httpHeaderWithToken).toPromise();
    const { cases, count } = result;

    this.length = count;
    this.arrCase = cases;
    this.pageSize = pageSize;
    this.pageIndex = pageIndex;

    this.isLoading = false;
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
