import { Component, OnInit } from '@angular/core';
import { CaseStore } from 'src/app/stores/case.store';

@Component({
  selector: 'app-default-report-pages',
  templateUrl: './default-report-pages.component.html',
  styleUrls: ['./default-report-pages.component.scss'],
})
export class DefaultReportPagesComponent implements OnInit {
  reportCase: any | undefined = {
    all_cases: "",
  };

  constructor(private caseStore: CaseStore) {}

  ngOnInit(): void {
    try {
      this.caseStore.getReportCase()?.then((res: any) => {
        this.reportCase = res;
        console.log(res);
      });
    } catch (e) {
      console.log(e);
    }
  }
}
