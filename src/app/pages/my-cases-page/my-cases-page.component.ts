import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CaseStore } from 'src/app/stores/case.store';

@Component({
  selector: 'app-my-cases-page',
  templateUrl: './my-cases-page.component.html',
  styleUrls: ['./my-cases-page.component.scss']
})
export class MyCasesPageComponent implements OnInit {

  selectedOption = '3';

  arrCases: Array<any> = [];
  fontStyleControl = new FormControl();
  fontStyle?: string;

  public selectedKey;




  constructor(
    private caseStore: CaseStore,
  ) { }

  ngOnInit(): void {
    try {
      this.selectedKey = localStorage.getItem('department_id');
      let agent_id = JSON.parse(localStorage.getItem('agent_auth') || '{}');
      this.caseStore
        .getCases(this.selectedKey, agent_id.id)
        ?.then((res: any) => {
          this.arrCases = res;
          console.log(res);
        });
    } catch (e) {
      console.log(e);
    }
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
