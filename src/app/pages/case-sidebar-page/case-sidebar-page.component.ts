import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseStore } from 'src/app/stores/case.store';

@Component({
  selector: 'app-case-sidebar-page',
  templateUrl: './case-sidebar-page.component.html',
  styleUrls: ['./case-sidebar-page.component.scss']
})
export class CaseSidebarPageComponent implements OnInit {
  public Items;
  public selectedItems;
  public selectedKey;
  public selectedValue;

  selectedId: any;

  arrClosedCases: Array<any> = [];

  constructor(
    public router: Router,
    private caseStore: CaseStore,
    private activatedRoute : ActivatedRoute,
    ) {
  }

  ngOnInit(): void {
    this.fetchClosedCases();
    console.log("init")
    this.activatedRoute.queryParams.subscribe((param)=>{
      this.selectedId = param.key;
      this.selectedKey = this.arrClosedCases[this.selectedId];
    });
  }

  fetchClosedCases() {
    this.caseStore.getClosedCases().subscribe((res: any) => {
      this.arrClosedCases = res;
      console.log(res);

    })
  }

  onSelectedList (item) {
    this.router.navigate(
      [{outlets: { primary: '/cases/case-details/' + item, child2: '/cases/case-details/' + item?.key}}],
      { queryParams: { key: item?.key } }
    )
  }
}
