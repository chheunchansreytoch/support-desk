import { Component, OnInit } from '@angular/core';
import { CustomerStore } from 'src/app/stores/customer.store';

@Component({
  selector: 'app-manage-customers-page',
  templateUrl: './manage-customers-page.component.html',
  styleUrls: ['./manage-customers-page.component.scss']
})
export class ManageCustomersPageComponent implements OnInit {

  arrCustomers: Array<any> = [];

  constructor(
    private customerStore: CustomerStore,
  ) { }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.customerStore.getCustomers().subscribe((res: any) => {
      this.arrCustomers = res;
    })
  }

  onCreate(item) {

  }

  onSelectedAgent(item){

  }

}
