import { Component, OnInit } from '@angular/core';
import { CustomerStore } from 'src/app/stores/customer.store';

@Component({
  selector: 'app-contact-info-page',
  templateUrl: './contact-info-page.component.html',
  styleUrls: ['./contact-info-page.component.scss']
})
export class ContactInfoPageComponent implements OnInit {

  arrCustomers: Array<any> = [];

  constructor(
    private customerState: CustomerStore,
  ) { }

  ngOnInit(): void {
    //this.fetchCustomers();
  }

  // fetchCustomers(item) {
  //   this.customerState.getCustomer(item).subscribe((res: any) => {
  //     this.arrCustomers = res;
  //   })
  // }

}
