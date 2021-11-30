import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { CaseStore } from 'src/app/stores/case.store';
import { Router } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import * as moment from 'moment';

@Component({
  selector: 'app-all-closed-cases-page',
  templateUrl: './all-closed-cases-page.component.html',
  styleUrls: ['./all-closed-cases-page.component.scss']
})
export class AllClosedCasesPageComponent implements OnInit {

  currentRoute: string = '';
  selectedOption = '3';
  arrCases: Array<any> = [];

  constructor(
    public router: Router,
    private location: Location,
    private caseStore: CaseStore,


  ) {}


  fetchCases() {
    this.caseStore.getCases().subscribe((res: any) => {
      this.arrCases = res;
      console.log(this.arrCases);
    });
  }

//select checkbox
  checks=false;
  checkAll(e:any) {
    if(e.target.checked==true) {
      this.checks=true;
    }
    else {
      this.checks=false;
    }
  }


  ngOnInit(): void {
    this.fetchCases();
  }

  convertUTCtoDate(UTC: string) {
    const date = new Date(UTC);
    const strDate = moment(date).format('LLLL');
    return strDate;
  }

}
