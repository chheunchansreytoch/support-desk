import { action, computed, observable } from "mobx";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IAgentDepartment } from "../models/IAgent.model";
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";



@Injectable({providedIn:'root'})
export class AgentDepartmentStore {

  @observable public isLoading: boolean = false;
  @observable public agentDepartment: IAgentDepartment | undefined;

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
      'Authorization': 'Bearer ' + this.agentDepartmentJSONMapping()?.token
    })
  };

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.getAgentDepartments();
  }

  agentDepartmentJSONMapping() {
    const result = localStorage.getItem("agentDepartment_auth") ? JSON.parse(localStorage.getItem("agentDepartment_auth") || '{}') : undefined;
    return result;
  }

  @computed
  get isLoggedIn(): boolean {
    const agent = localStorage.getItem('agentDepartment_auth');
    return agent != null ? true : false;
  }

  // @action
  // login(username: string, email: string, password: string) {
  //   try {
  //     this.httpClient.post<IAgent>(
  //       this.endpoint + '/agents/login',
  //       JSON.stringify({ username, email, password }), this.httpHeader)
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
  getAgentDepartments(): Observable<IAgentDepartment> {
    return this.httpClient.get<IAgentDepartment>(this.endpoint + '/agentDepartments', this.httpHeaderWithToken)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  @action
  getAgent(id, data): Observable<IAgentDepartment> {
    return this.httpClient.get<IAgentDepartment>(this.endpoint + '/agentDepartments/' + id, this.httpHeader)
    .pipe(
      retry(1),
      catchError(this.processError)
    )

  }

  @action
  addAgent(data: IAgentDepartment): Observable<IAgentDepartment> {
    return this.httpClient.post<IAgentDepartment>(this.endpoint + '/agentDepartments/create', JSON.stringify(data), this.httpHeader)
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
  deleteAgent(id){
    return this.httpClient.delete<IAgentDepartment>(this.endpoint + '/agentDepartments/' + id, this.httpHeader)
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
