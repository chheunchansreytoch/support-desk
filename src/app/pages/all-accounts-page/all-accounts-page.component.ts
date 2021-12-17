import { Component, OnInit } from '@angular/core';
import { CustomerStore } from 'src/app/stores/customer.store';

@Component({
  selector: 'app-all-accounts-page',
  templateUrl: './all-accounts-page.component.html',
  styleUrls: ['./all-accounts-page.component.scss']
})
export class AllAccountsPageComponent implements OnInit {

  selectedOption = '3';
  arrCustomers: Array<any> = [];

  constructor(
    private customerStore: CustomerStore,
  ){ }

  fetchCustomers() {
    this.customerStore.getCustomers().subscribe((res: any) => {
      this.arrCustomers = res;
      console.log(this.arrCustomers);
    });
  }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  checks=false;
  checkAll(e:any) {
    if(e.target.checked==true) {
      this.checks=true;
    }
    else {
      this.checks=false;
    }
  }

}
