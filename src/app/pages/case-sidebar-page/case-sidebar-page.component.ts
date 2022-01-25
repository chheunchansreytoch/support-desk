import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseStore } from 'src/app/stores/case.store';

@Component({
  selector: 'app-case-sidebar-page',
  templateUrl: './case-sidebar-page.component.html',
  styleUrls: ['./case-sidebar-page.component.scss']
})
export class CaseSidebarPageComponent implements OnInit {
  @Input() customer;
  public Items;
  public selectedItems;
  public selectedKey;
  public selectedValue;

  selectedId: any;

  arrClosedCases: Array<any> = [];
  //arrClosedCase: Array<any> = [];

  constructor(
    public router: Router,
    private caseStore: CaseStore,
    private activatedRoute : ActivatedRoute,
    ) {
  }

  ngOnInit(): void {
    this.fetchClosedCases();
    this.activatedRoute.queryParams.subscribe((param)=>{
      this.selectedKey = param.key;
    });
  }

  fetchClosedCases() {
    this.selectedKey = localStorage.getItem('department_id');
    let agent_id = JSON.parse(localStorage.getItem('agent_auth') || '{}');
    this.caseStore
    .getAllClosedCases(this.selectedKey, agent_id.id)
    ?.then((res: any) => {
      this.arrClosedCases = res;
      //console.log(res);
    });
  }

  // onSelectedItem (item) {
  //   if (item === this.selectedKey) {
  //     this.selectedId = item;
  //   }
  // }
}
