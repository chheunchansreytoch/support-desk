import { Component, OnInit } from '@angular/core';
import { CustomerStore } from 'src/app/stores/customer.store';

@Component({
  selector: 'app-contact-sidebar-page',
  templateUrl: './contact-sidebar-page.component.html',
  styleUrls: ['./contact-sidebar-page.component.scss']
})
export class ContactSidebarPageComponent implements OnInit {

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

}
