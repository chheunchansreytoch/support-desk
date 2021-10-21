import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  currentRoute = '';
  selectedOption = '3';
  public Items;
  public selectedItems;

  constructor(public router: Router, private location: Location){
    this.Items = [
      {name: 'All Contacts', label: 'contacts/agent-all-contacts'},
      {name: 'My Contacts', label: 'contacts/agent-my-contacts'},
      // {name: 'Recently Viewed'},
      {name: 'Recently Viewed Contacts', label: 'contacts/agent-recently-viewed-contacts'},
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

    if (value == 'All Contacts') {
      this.router.navigate(['/contacts/agent-all-contacts']);
    }
    else if (value == 'My Contacts') {
      this.router.navigate(['/contacts/agent-my-contacts']);
    }

    // else if (value == 'Recently Viewed Contacts') {
    //   this.router.navigate(['/cases/agent-my-cases']);
    // }

    else if (value == 'Recently Viewed Contacts'){
      this.router.navigate(['/contacts/agent-recently-viewed-contacts']);
    }
  }

  ngOnInit(): void {
  }
}
