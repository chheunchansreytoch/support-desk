import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Agent } from 'src/app/typeScripts/agents';
import { BtnSideBarService } from 'src/app/services/btn-side-bar.service';
import { DialogsService } from 'src/app/services/dialogs.service';
import { ManagerStore } from 'src/app/stores/manager.store';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-header-front',
  templateUrl: './admin-header-front.component.html',
  styleUrls: ['./admin-header-front.component.scss']
})
export class AdminHeaderFrontComponent implements OnInit {

  public selectedKey;
  contactName: any;

  arrManagerAccount: any = null;
  agents: Agent[] = [];

  constructor(
    public sideBarService: BtnSideBarService,
    private dialogService: DialogsService,
    private managerStore: ManagerStore,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.activatedRoute.parent?.queryParams.subscribe((param)=>{
      this.selectedKey = param.key;
      console.log('key', param.key);

      //this.caseId = this.selectedKey;

      try{
        this.managerStore.getManager(this.selectedKey).then((res: any) => {
          this.arrManagerAccount = res;
          console.log(res);
        })
      }catch(e){
        console.log(e)
      }
    });
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

  checkLocalStoragePath(str: string) {
    if(str.includes('public/')) {
      str = str.replace('public/', '');
      return 'http://localhost:3000/' + str;
    } else return str;
  }
}
