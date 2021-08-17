import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-default-header-front',
  templateUrl: './default-header-front.component.html',
  styleUrls: ['./default-header-front.component.scss']
})
export class DefaultHeaderFrontComponent implements OnInit {

  public Items;
  public selectedItems;

constructor(public router: Router, private location: Location){
  this.Items = [
    {name: 'Cases'},
    {name: 'Contacts'},
    {name: 'Accounts'},
    {name: 'Reports'},
  ]
}

itemSelected(event: any) {
  this.selectedItems = event.target.value;
  this.router.navigate([event.target.value.toLowerCase()])
}


  ngOnInit(): void {
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
    this.showProfileUser=!this.showProfileUser
  }

   //Notification Popup
   showNotificationPopup:boolean=false
   clickNotification() {
     this.showNotificationPopup=!this.showNotificationPopup
   }
}
