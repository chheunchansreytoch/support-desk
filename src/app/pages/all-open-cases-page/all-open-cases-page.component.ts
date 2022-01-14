import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CaseStore } from 'src/app/stores/case.store';

@Component({
  selector: 'app-all-open-cases-page',
  templateUrl: './all-open-cases-page.component.html',
  styleUrls: ['./all-open-cases-page.component.scss']
})
export class AllOpenCasesPageComponent implements OnInit {

  selectedOption = '3';

  arrOpenCases: Array<any> = [];
  fontStyleControl = new FormControl();
  fontStyle?: string;

  constructor(
    private caseStore: CaseStore,
  ) { }

  ngOnInit(): void {
    this.fetchOpenCases();
  }

  fetchOpenCases() {
    this.caseStore.getOpenCases().subscribe((res: any) => {
      this.arrOpenCases = res;
      console.log(res);
    })
  }

  onCreate(item) {

  }

  onSelectedAgent(item) {

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
}
