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
  public caseId;
  public selectedItems;
  public customer;
  selectedKey: any;

  arrClosedCase : any = null;

  constructor(
    public router: Router,
    public caseStore: CaseStore,
    private activatedRoute : ActivatedRoute,
    ) {
      //console.log('hello')
  }


  ngOnInit(): void {
    this.activatedRoute.parent?.queryParams.subscribe((param)=>{
      this.selectedKey = param.key;
      this.caseId = this.selectedKey;

      try{
        this.caseStore.getClosedCase(this.caseId).then((res: any) => {
          this.arrClosedCase = res;
          console.log(res)
          this.customer = res.customer;
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
