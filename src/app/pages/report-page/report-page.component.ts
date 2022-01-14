import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {

  currentRoute = '';
  selectedOption = '3';

  public Items;
  public selectedItems;

  constructor(
    public router: Router,
    private location: Location,
  ) {
    this.Items = [
      {name: 'General Reports', label: 'contacts/agent-all-contacts'},
      {name: 'Daily Reports', label: 'contacts/agent-my-contacts'},
      {name: 'Monthly Reports', label: 'contacts/agent-recently-viewed-contacts'},
      {name: 'Yearly Reports', label: 'contacts/agent-recently-viewed-contacts'},
    ];
    router.events.subscribe(val => {
      this.currentRoute = location.path();
    });
   }

  ngOnInit(): void {
  }

  checkIfRouteIsActivated(item: string) {
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

    if (value == 'General Reports') {
      this.router.navigate(['/contacts/agent-all-contacts']);
    }
    else if (value == 'Daily Reports') {
      this.router.navigate(['/contacts/agent-my-contacts']);
    }

    else if (value == 'Monthly Reports') {
      this.router.navigate(['/cases/agent-my-cases']);
    }

    else if (value == 'Yearly Reports'){
      this.router.navigate(['/contacts/agent-recently-viewed-contacts']);
    }
  }
}
