import { Component, OnInit } from '@angular/core';
import { ManagerStore } from 'src/app/stores/manager.store';

@Component({
  selector: 'app-manage-managers-page',
  templateUrl: './manage-managers-page.component.html',
  styleUrls: ['./manage-managers-page.component.scss']
})
export class ManageManagersPageComponent implements OnInit {

  arrManagers: Array<any> = [];

  constructor(
    private managerStore:ManagerStore,
  ) { }

  ngOnInit(): void {
    this.fetchManagers();
  }

  fetchManagers() {
    this.managerStore.getManagers().subscribe((res: any) => {
      this.arrManagers = res;
    })
  }

  onCreate(item) {

  }

  onSelectedAgent(item) {

  }
}
