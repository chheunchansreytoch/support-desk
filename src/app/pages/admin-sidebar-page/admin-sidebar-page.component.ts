import { Component, OnInit } from '@angular/core';
import { BtnSideBarService } from 'src/app/services/btn-side-bar.service';

@Component({
  selector: 'app-admin-sidebar-page',
  templateUrl: './admin-sidebar-page.component.html',
  styleUrls: ['./admin-sidebar-page.component.scss'],
})
export class AdminSidebarPageComponent implements OnInit {
  public selectedItem;

  public items;
  currentRoute: string = '';

  // homeImage = './assets/images/admin-iconList/home.png';
  // agentImage = './assets/images/admin-iconList/target.png';
  // caseImage = './assets/images/admin-iconList/target.png';
  // reportImage = './assets/images/admin-iconList/clipboard.png';

  constructor(public sideBarService: BtnSideBarService) {
    // this.Items = [
    //   {id: 1, icon: this.homeImage, name: 'Home', route: '/admin-homepage'},
    //   {id: 2, icon: this.agentImage, name: 'Agent Accounts', route: '/admin-manage-agents'},
    //   {id: 3, icon: this.caseImage, name: 'Manage Cases', route: '/admin-manage-cases'},
    //   {id: 4, icon: this.reportImage, name: 'Report', route: '/agents'},
    // ];
    // router.events.subscribe(val => {
    //   this.currentRoute = location.path();
    // });
  }

  ngOnInit(): void {
    //this.items = this.Items;
    // this.selectedItem = this.items[0];
  }

  // onClickListItems(listItem: any) {
  //   this.selectedItem = listItem;
  // }

  // onClickBtnSideBar() {
  //   this.sideBarService.isOpenSideBar();
  // }

  // checkIfRouteIsActivated(item: string) {
  //   return this.currentRoute.includes(item.toLowerCase());
  // }
}
