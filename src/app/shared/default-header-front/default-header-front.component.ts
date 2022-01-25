import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router, RouterModule,} from '@angular/router';
import {Location} from '@angular/common';
import { AgentStore } from 'src/app/stores/agent.store';
import { CaseStore } from 'src/app/stores/case.store';
import { ICase } from 'src/app/models/ICase.model';

@Component({
  selector: 'app-default-header-front',
  templateUrl: './default-header-front.component.html',
  styleUrls: ['./default-header-front.component.scss']
})
export class DefaultHeaderFrontComponent implements OnInit {

  //event$;
  currentRoute: string = '';
  username: string = '';

  public Items;
  public selectedItems;
  public selectedKey;

  public searchText;

  arrSearching : any = [];

  arrAgentAccount : any = null;

  constructor(
    public router: Router,
    private location: Location,
    public agentStore: AgentStore,
    public caseStore: CaseStore,
    private activatedRoute : ActivatedRoute,
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
    this.caseStore.arrClosedCases;

    try{
      this.agentStore.getAgent(this.selectedKey)?.subscribe((res: any) => {
        this.arrAgentAccount = res;
        localStorage.setItem('department_id',res.agentDepartment.id);
        console.log(res)
      })
    }catch(e){
      console.log(e)
    }
  }

  search() {
    if(this.username == "") {
       this.ngOnInit();
    }
    else {
      this.arrSearching = this.caseStore.arrClosedCases.filter(res =>{
        return res.customer?.username?.toLocaleLowerCase().match(this.username?.toLocaleLowerCase());
      });
    }
    this.caseStore.arrClosedCases = this.arrSearching;
  }

  btnSearchClicked() {

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

  checkLocalStoragePath(str: string) {
    if(str.includes('public/')) {
      str = str.replace('public/', '');
      return 'http://localhost:3000/' + str;
    } else return str;
  }

  btnLogOutClicked() {
    const value = localStorage.removeItem("agent_auth");
    this.router.navigate(['/agent-login']);
  }
}
