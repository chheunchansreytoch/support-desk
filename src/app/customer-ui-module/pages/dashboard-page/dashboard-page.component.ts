import { Component, OnInit } from '@angular/core';
import { CASELIST } from '../../dummy/app';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  constructor() {}
  caseList = CASELIST;
  selectedIndex: number = 0;
  ngOnInit(): void {}
  btnStatusClicked(index: number) {
    this.selectedIndex = index;
  }
}
