import { action, computed, observable } from 'mobx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IAgent } from '../models/IAgent.model';

@Injectable({ providedIn: 'root' })
export class AgentStore {
  @observable public isLoading: boolean = false;
  @observable public agent: IAgent | undefined;
  @observable public agentData = null;
  @observable public selectedAgent;

  endpoint = 'http://localhost:3000/api';
  httpHeader = {
    headers: new HttpHeaders({
      enctype: 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    }),
  };

  httpHeaderWithToken = {
    headers: new HttpHeaders({
      enctype: 'multipart/form-data',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      Authorization: 'Bearer ' + this.agentJSONMapping()?.token,
    }),
  };

  constructor(private httpClient: HttpClient, private router: Router) {
    this.getAgents();
  }

  agentJSONMapping() {
    const result = localStorage.getItem('agent_auth')
      ? JSON.parse(localStorage.getItem('agent_auth') || '{}')
      : undefined;
    return result;
  }

  @computed
  get isLoggedIn(): boolean {
    const agent = localStorage.getItem('agent_auth');
    return agent != null ? true : false;
  }

  @computed
  get getCurrentAgentUser(): any {
    const agent = localStorage.getItem('agent_auth');
    return agent
      ? JSON.parse(agent)
      : { id: null, username: null, password: null };
  }

  @action
  async login(email: string, password: string) {
    try {
      this.isLoading = true;
      await this.httpClient
        .post<IAgent>(
          this.endpoint + '/agents/login',
          {
            email: email,
            password: password,
          },
          this.httpHeader
        )
        .toPromise()
        .then((result) => {
          console.log(result);
          this.router.navigate(['/cases'], {
            queryParams: { key: this.getCurrentAgentUser.id },
          });
          localStorage.setItem('agent_auth', JSON.stringify(result));
          console.log('correct');
        });
    } catch (error) {
      this.isLoading = false;
      console.log('login error ln.52: ', error);
    }
  }

  @action
  getAgents(): Observable<IAgent> {
    // this.isLoading = true;
    return this.httpClient
      .get<IAgent>(this.endpoint + '/agents', this.httpHeaderWithToken)
      .pipe(retry(1), catchError(this.processError));
  }

  getAgent(agentData) {
    agentData = JSON.parse(localStorage.getItem('agent_auth') || '{}');
    if (!agentData) return;
    return this.httpClient
      .get<IAgent>(
        this.endpoint + '/agents/' + agentData.id,
        this.httpHeaderWithToken
      )

      .pipe(retry(1), catchError(this.processError));
  }

  @action
  async getAgentsByDepartment(agentDepartmentId: string) {
    try {
      if (!agentDepartmentId) return;
      const result = await this.httpClient
        .get<Array<IAgent>>(
          this.endpoint + '/agents/' + agentDepartmentId + '/departmentId',
          this.httpHeaderWithToken
        )
        .toPromise();
      return result || [];
    } catch (error) {
      console.log(error);
    }
    return;
  }

  @action
  async addAgent(data: IAgent): Promise<IAgent> {
    const result = await this.httpClient
      .post<IAgent>(
        this.endpoint + '/agents/create',
        JSON.stringify(data),
        this.httpHeader
      )
      .toPromise();
    return result;
  }

  @action
  async addAgent_FormData(data: FormData): Promise<IAgent> {
    this.isLoading = true;
    const result = await this.httpClient
      .post<IAgent>(this.endpoint + '/agents/create', data, this.httpHeader)
      .toPromise();
    this.isLoading = false;
    return result;
  }

  @action
  async updateAgent(agentData) {
    try {
      const result = await this.httpClient
        .put<IAgent>(
          this.endpoint + '/agents/' + agentData.id,
          JSON.stringify(agentData),
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
  async updateAgent_FormData(agentId: string, data: FormData): Promise<IAgent> {
    this.isLoading = true;
    const result = await this.httpClient
      .put<IAgent>(this.endpoint + '/agents/' + agentId, data, this.httpHeader)
      .toPromise();
    this.isLoading = false;
    return result;
  }

  @action
  async deleteAgent(id) {
    const result = await this.httpClient
      .delete<IAgent>(this.endpoint + '/agents/' + id, this.httpHeader)
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
}
