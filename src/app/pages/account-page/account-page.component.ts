import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  currentRoute = '';
  selectedOption = '3';
  public Items;
  public selectedItems;

  constructor(public router: Router, private location: Location){
    this.Items = [
      {name: 'All Accounts', label: 'accounts/agent-all-accounts'},
      {name: 'My Account', label: 'accounts/agent-my-account'},
      {name: 'Recently Viewed', label: 'accounts/agent-recently-viewed-account'},
      //{name: 'Recently Viewed Cases'},
    ];

    router.events.subscribe(val => {
      this.currentRoute = location.path();
    });
  }

  checkIfRouteIsActivated(item: string) {
    console.log(this.currentRoute)
    console.log(item)
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

    const allAccount = 'All Accounts';
    const myAccount = 'My Account';
    const recentyViewed = 'Recently Viewed';
   //const recentlyViewsCases = 'Recently Viewed Cases';


    if (value == allAccount) {
      this.router.navigate(['/accounts/agent-all-accounts']);
    }
    else if (value == myAccount) {
      this.router.navigate(['/accounts/agent-my-account']);
    }

    else if (value == recentyViewed) {
      this.router.navigate(['/accounts/agent-recently-viewed-account']);
    }

    // else if (value == recentlyViewsCases){
    //   console.log('review case works');
    // }
  }

  ngOnInit(): void {
  }
}
