import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BtnSideBarService } from 'src/app/services/btn-side-bar.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-admin-sidebar-page',
  templateUrl: './admin-sidebar-page.component.html',
  styleUrls: ['./admin-sidebar-page.component.scss']
})
export class AdminSidebarPageComponent implements OnInit {

  public selectedItem;
  public Items;
  public items;
  currentRoute: string = '';
  //isSelected: Boolean = false;

  homeImage = './assets/images/admin-iconList/home.png';
  agentImage = './assets/images/admin-iconList/target.png';
  caseImage = './assets/images/admin-iconList/toolbox.png';
  reportImage = './assets/images/admin-iconList/clipboard.png';

  constructor(
    public sideBarService: BtnSideBarService,
    private router: Router,
    private location: Location

    ) {
      this.Items = [
        {id: 1, icon: this.homeImage, name: 'Home', route: '/admin-homepage'},
        {id: 2, icon: this.agentImage, name: 'Agent Accounts', route: '/admin-manage-agents'},
        {id: 3, icon: this.caseImage, name: 'Manage Cases', route: '/admin-manage-cases'},
        {id: 4, icon: this.reportImage, name: 'Report', route: '/agents'},
      ];

      router.events.subscribe(val => {
        this.currentRoute = location.path();
      });
     }

  ngOnInit(): void {
    this.items = this.Items;
    this.selectedItem = this.items[0];
  }

  onClickListItems(listItem: any) {
    this.selectedItem = listItem;

    // if (this.selectedItem == this.Items[0]) {
    //   this.isSelected = true;
    // }else if (this.selectedItem == this.Items[1]){

    // }


   // const checkValue = this.selectedItem;
    //var itemValue = this.Items;
    // switch(this.Items) {
    //   case 1: {
    //     this.selectedItem = this.Items[0];
    //     break;
    //   }

    //   case 2: {
    //     this.selectedItem = this.Items[1];
    //     break;
    //   }

    //   case 3: {
    //     this.selectedItem = this.Items[2];
    //     break;
    //   }

    //   case 4: {
    //     this.selectedItem = this.Items[3];
    //     break;
    //   }

    //   return this.selectedItem;
    // }

    // for (let value of Object.values(checkValue)) {
    //   console.log(value);
    // }



    // console.log(itemValue);
    // if (checkValue == itemValue) {
    //   this.isSelected = true;
    // }
    // else {
    //   this.isSelected = false;
    // }
  }

  onClickBtnSideBar() {
    this.sideBarService.isOpenSideBar();
  }

  checkIfRouteIsActivated(item: string) {
    return this.currentRoute.includes(item.toLowerCase());
  }
}
