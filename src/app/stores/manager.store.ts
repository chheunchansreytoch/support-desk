import { action, computed, observable } from "mobx";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IManager } from "../models/IManager.model";
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class ManagerStore {

  @observable public isLoading: boolean = false;
  @observable public manager: IManager | undefined;

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
      'Authorization': 'Bearer ' + this.managerJSONMapping()?.token
    })
  };

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {
    this.getManagers();;
  }

  managerJSONMapping() {
    const result = localStorage.getItem("manager_auth") ? JSON.parse(localStorage.getItem("manager_auth") || '{}') : undefined;
    return result;
  }

  @computed
  get isLoggedIn(): boolean {
    const manager = localStorage.getItem('manager_auth');
    return manager != null ? true : false;
  }

  @computed
  get getCurrentUser(): any {
    const manager = localStorage.getItem('manager_auth');
    return manager ? JSON.parse(manager) : {id: null, username: null, password: null };

  }

  @action
  async login(email: string, password: string) {
    try {
      this.isLoading = true;
      await this.httpClient
        .post<IManager>(
          this.endpoint + '/managers/login',
          {
            email: email,
            password: password,
          },
          this.httpHeader
        )
        .toPromise()
        .then((result) => {
          console.log(result);
          this.router.navigate(['/admin-homepage'], {
            queryParams: { key: this.getCurrentUser.id },
          });
          console.log('id', this.getCurrentUser.id);

          localStorage.setItem('manager_auth', JSON.stringify(result));
          console.log('correct');
        });
    } catch (error) {
      this.isLoading = false;
      console.log('login error ln.52: ', error);
    }
  }


  // @action
  // async login(email: string, password: string) {
  //   try {
  //     this.isLoading = true;
  //     await this.httpClient.post<IManager>(
  //       this.endpoint + '/managers/login',
  //       JSON.stringify({email, password }), this.httpHeader).toPromise()
  //       .then((result) => {
  //         localStorage.setItem("manager_auth", JSON.stringify(result));
  //         this.router.navigate(['/admin-homepage'], {
  //           queryParams: { key: this.getCurrentUser.id },
  //         });
  //         console.log("correct");
  //       });
  //   } catch(error) {
  //     console.log('login error ln.52: ', error)
  //   }
  // }

  @action
  getManagers(): Observable<IManager> {
    //const userData = JSON.parse(localStorage.getItem('user_auth') || '{}');
    return this.httpClient.get<IManager>(this.endpoint + '/managers', this.httpHeaderWithToken)
    .pipe(
      retry(1),
      catchError(this.processError)
    )
  }

  // @action
  // getManager(id): Observable<IManager> {
  //   return this.httpClient.get<IManager>(this.endpoint + '/managers/' + id, this.httpHeader)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

  @action
  async getManager(id) {
    try {
      const result = await this.httpClient.get<IManager>(this.endpoint + '/managers/' + id, this.httpHeader).toPromise();
      return result;
    } catch (error) {
      console.log(error);
      return;
    }
  }

  // @action
  // async addManager(data: any) {
  //   try {
  //     const result = await this.httpClient.post<IManager>(this.endpoint + '/invoice/create', JSON.stringify(data), this.httpHeader).toPromise();
  //     return result;
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  @action
  addManager(data: IManager): Observable<IManager> {
    return this.httpClient.post<IManager>(this.endpoint + '/managers/create', JSON.stringify(data), this.httpHeader)
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
  deleteManager(id){
    return this.httpClient.delete<IManager>(this.endpoint + '/managers/' + id, this.httpHeader)
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
