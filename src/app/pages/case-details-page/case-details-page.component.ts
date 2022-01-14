import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseStore } from 'src/app/stores/case.store';

@Component({
  selector: 'app-case-details-page',
  templateUrl: './case-details-page.component.html',
  styleUrls: ['./case-details-page.component.scss']
})
export class CaseDetailsPageComponent implements OnInit {

  public Items;
  public selectedItems;
  selectedId: any;

  arrClosedCase : any = null;

  constructor(
    public router: Router,
    public caseStore: CaseStore,
    private activatedRoute : ActivatedRoute,
    ) {
      console.log('hello')
  }


  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param)=>{
      this.selectedId = param.key;
      console.log('child 1');
      const caseId = this.selectedId;
      try{
        this.caseStore.getClosedCase(caseId).then((res: any) => {
          this.arrClosedCase = res;
          console.log(res);

        })
      }catch(e){
        console.log(e)
      }
    });
  }


  onSelectedOption(event: any) {
    this.selectedItems = event.target.value;
    const value = this.selectedItems;

    const allClosedCases = 'All Closed Cases';

    if (value == allClosedCases) {
      this.router.navigate(['/cases/agent-all-closed-cases']);
    }
    else if (value == 'All Open Cases') {
      this.router.navigate(['/cases/agent-all-open-cases']);
    }

    else if (value == 'My Cases') {
      this.router.navigate(['/cases/agent-my-cases']);
    }

    else if (value == 'Recently Viewed Cases'){
      console.log('review case works');
    }
  }

}
