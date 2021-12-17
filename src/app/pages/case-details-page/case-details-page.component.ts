import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-details-page',
  templateUrl: './case-details-page.component.html',
  styleUrls: ['./case-details-page.component.scss']
})
export class CaseDetailsPageComponent implements OnInit {

  public Items;
  public selectedItems;

  constructor(public router: Router) {
    this.Items = [
      {name: 'All Closed Cases'},
      {name: 'All Open Cases'},
      {name: 'My Cases'},
      {name: 'Recently Viewed Cases'},
    ];
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

  ngOnInit(): void {
  }

}
