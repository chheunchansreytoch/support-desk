import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-skeleton-loading',
  templateUrl: './table-skeleton-loading.component.html',
  styleUrls: ['./table-skeleton-loading.component.scss']
})
export class TableSkeletonLoadingComponent implements OnInit {

  arrDummy: Array<any> = [];

  constructor() {
    this.arrDummy = Array(10).fill('').map((x,i)=>i);
  }

  ngOnInit(): void {

  }

}
