import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cases-page',
  templateUrl: './cases-page.component.html',
  styleUrls: ['./cases-page.component.scss']
})
export class CasesPageComponent implements OnInit {

  currentRoute = '';
  selectedOption = '3';
  public Items;
  public selectedItems;
  public callItemSelected;

  constructor(
    public router: Router,
    private location: Location
    ) {
    this.Items = [
      {name: 'All Closed Cases', label:'cases/agent-all-closed-cases'},
      {name: 'All Open Cases', label:'cases/agent-all-open-cases'},
      {name: 'My Cases', label:'cases/agent-my-cases'},
      //{name: 'Recently Viewed Cases', label:'cases/agent-all-closed-cases'},
    ];

    router.events.subscribe(val => {
      this.currentRoute = location.path();
    });
  }


  ngOnInit(): void {
  }

  checkIfRouteIsActivated(item: string) {
    this.currentRoute;
    // console.log(this.currentRoute)
    // console.log(item)
    return this.currentRoute.includes(item);
  }

  itemSelected(e: any) {
    console.log(e)
    this.selectedItems = e.target.value;
    this.router.navigate(['/' + e.target.value]);
  }

  onSelectedOption(event: any) {
    this.itemSelected(event);

    this.selectedItems = event.target.value;
    const value = this.selectedItems;

    const allClosedCases = 'All Closed Cases';
    const allOpenCases = 'All Open Cases';
    const myCases = 'My Cases';
    const recentlyViewsCases = 'Recently Viewed Cases';


    if (value == allClosedCases) {
      this.router.navigate(['/cases/agent-all-closed-cases']);
    }
    else if (value == allOpenCases) {
      this.router.navigate(['/cases/agent-all-open-cases']);
    }

    else if (value == myCases) {
      this.router.navigate(['/cases/agent-my-cases']);
    }

    // else if (value == recentlyViewsCases){
    //   console.log('review case works');
    // }
  }
}
