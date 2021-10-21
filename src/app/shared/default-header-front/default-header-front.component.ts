import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterModule,} from '@angular/router';
import {Location} from '@angular/common';

import { map, filter, scan } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from,
  interval, merge, fromEvent } from 'rxjs';

@Component({
  selector: 'app-default-header-front',
  templateUrl: './default-header-front.component.html',
  styleUrls: ['./default-header-front.component.scss']
})
export class DefaultHeaderFrontComponent implements OnInit {

  //event$;
  currentRoute: string = '';
  public Items;
  public selectedItems;

  constructor(
    public router: Router,
    private location: Location
    ) {
    this.Items = [
      {name: 'Cases'},
      {name: 'Contacts'},
      {name: 'Accounts'},
      {name: 'Reports'},
    ];

    router.events.subscribe(val => {
      this.currentRoute = location.path();
    });
  }

  ngOnInit(): void {

  }

  itemSelected(event: any) {
    this.selectedItems = event.target.value;
    this.router.navigate(['/' + event.target.value.toLowerCase()]);
  }

  selectedValue = '0';

  //Favorite icon Popup
  showFavoritePopup:boolean=false
  clickfavoritePopup() {
    this.showFavoritePopup=!this.showFavoritePopup
  }

  //User Profile Popup
  showProfileUser:boolean=false
  clickProfile() {
    this.showProfileUser=!this.showProfileUser;
  }

   //Notification Popup
   showNotificationPopup:boolean=false
   clickNotification() {
     this.showNotificationPopup=!this.showNotificationPopup;
   }

  checkIfRouteIsActivated(item: string) {
    return this.currentRoute.includes(item.toLowerCase());
  }



}
