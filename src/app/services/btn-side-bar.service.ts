import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BtnSideBarService {

  public isBtnSideBar: boolean = false;

  constructor() {
    this.isBtnSideBar = JSON.parse(localStorage.getItem('isBtnSideBar') || '{}') || false;
  }

  public isOpenSideBar(): void {
    this.isBtnSideBar = !this.isBtnSideBar;
    localStorage.setItem('isBtnSideBar', this.isBtnSideBar + '');
  }
}
