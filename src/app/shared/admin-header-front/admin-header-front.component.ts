import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Agent } from 'src/app/typeScripts/agents';
import { BtnSideBarService } from 'src/app/services/btn-side-bar.service';
import { DialogsService } from 'src/app/services/dialogs.service';

@Component({
  selector: 'app-admin-header-front',
  templateUrl: './admin-header-front.component.html',
  styleUrls: ['./admin-header-front.component.scss']
})
export class AdminHeaderFrontComponent implements OnInit {

  contactName: any;
  agents: Agent[] = [];
  notifyValues = [
    {id: '1', notification: 'Cannot solving billing issues', accountName: 'Park Haram', duration: '1 min ago'},
    {id: '2', notification: 'Cannot solving billing issues', accountName: 'Park Haram' , duration: '2 min ago'},
    {id: '3', notification: 'Cannot solving billing issues', accountName: 'Park Haram' , duration: '3 min ago'},
    {id: '4', notification: 'Cannot solving billing issues', accountName: 'Park Haram' , duration: '4 min ago'},
    {id: '5', notification: 'Cannot solving billing issues', accountName: 'Park Haram' , duration: '5 min ago'},
    {id: '6', notification: 'Cannot solving billing issues', accountName: 'Park Haram' , duration: '6 min ago'},
    {id: '7', notification: 'Cannot solving billing issues', accountName: 'Park Haram' , duration: '7 min ago'},
  ];

  constructor(public sideBarService: BtnSideBarService, private dialogService: DialogsService) { }

  ngOnInit(): void {

  }

  onClickBtnSideBar() {
    this.sideBarService.isOpenSideBar();
  }

  //Notification Popup
  showNotificationPopup:boolean=false
  clickNotification() {
    this.showNotificationPopup=!this.showNotificationPopup;
  }

  onClickViewNotification() {
    this.clickNotification();
    this.dialogService.openViewNotificationDialog();
  }

  getDateTime() {
    return new Date();
  }
}
