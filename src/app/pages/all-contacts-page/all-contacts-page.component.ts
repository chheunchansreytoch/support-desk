import { Component, OnInit } from '@angular/core';
import { CustomerStore } from 'src/app/stores/customer.store';
import { CustomerDepartmentStore } from 'src/app/stores/customerDepartment.store';

@Component({
  selector: 'app-all-contacts-page',
  templateUrl: './all-contacts-page.component.html',
  styleUrls: ['./all-contacts-page.component.scss']
})
export class AllContactsPageComponent implements OnInit {

  // rows = [
  //   {
  //     n: "1",
  //     all: "",
  //     name: "Chheun Chansreytoch",
  //     accountNumber: "Edge Communications",
  //     title: "SVP, Procurement",
  //     phone: "(512) 757-6000",
  //     email: "chheunchansreytoch@gmail.com",
  //     contactOwnerAlias: "Chheun Chansreytoch",
  //     option: "",
  //   },

  //   {
  //     n: "2",
  //     all: "",
  //     name: "Chheun Chansreytoch",
  //     accountNumber: "Edge Communications",
  //     title: "SVP, Procurement",
  //     phone: "(512) 757-6000",
  //     email: "chheunchansreytoch@gmail.com",
  //     contactOwnerAlias: "Chheun Chansreytoch",
  //     option: "",
  //   },

  //   {
  //     n: "3",
  //     all: "",
  //     name: "Chheun Chansreytoch",
  //     accountNumber: "Edge Communications",
  //     title: "SVP, Procurement",
  //     phone: "(512) 757-6000",
  //     email: "chheunchansreytoch@gmail.com",
  //     contactOwnerAlias: "Chheun Chansreytoch",
  //     option: "",
  //   },
  //   {
  //     n: "4",
  //     all: "",
  //     name: "Chheun Chansreytoch",
  //     accountNumber: "Edge Communications",
  //     title: "SVP, Procurement",
  //     phone: "(512) 757-6000",
  //     email: "chheunchansreytoch@gmail.com",
  //     contactOwnerAlias: "Chheun Chansreytoch",
  //     option: "",
  //   },

  //   {
  //     n: "5",
  //     all: "",
  //     name: "Chheun Chansreytoch",
  //     accountNumber: "Edge Communications",
  //     title: "SVP, Procurement",
  //     phone: "(512) 757-6000",
  //     email: "chheunchansreytoch@gmail.com",
  //     contactOwnerAlias: "Chheun Chansreytoch",
  //     option: "",
  //   },

  //   {
  //     n: "5",
  //     all: "",
  //     name: "Chheun Chansreytoch",
  //     accountNumber: "Edge Communications",
  //     title: "SVP, Procurement",
  //     phone: "(512) 757-6000",
  //     email: "chheunchansreytoch@gmail.com",
  //     contactOwnerAlias: "Chheun Chansreytoch",
  //     option: "",
  //   },

  //   {
  //     n: "5",
  //     all: "",
  //     name: "Chheun Chansreytoch",
  //     accountNumber: "Edge Communications",
  //     title: "SVP, Procurement",
  //     phone: "(512) 757-6000",
  //     email: "chheunchansreytoch@gmail.com",
  //     contactOwnerAlias: "Chheun Chansreytoch",
  //     option: "",
  //   },

  //   {
  //     n: "5",
  //     all: "",
  //     name: "Chheun Chansreytoch",
  //     accountNumber: "Edge Communications",
  //     title: "SVP, Procurement",
  //     phone: "(512) 757-6000",
  //     email: "chheunchansreytoch@gmail.com",
  //     contactOwnerAlias: "Chheun Chansreytoch",
  //     option: "",
  //   },

  //   {
  //     n: "5",
  //     all: "",
  //     name: "Chheun Chansreytoch",
  //     accountNumber: "Edge Communications",
  //     title: "SVP, Procurement",
  //     phone: "(512) 757-6000",
  //     email: "chheunchansreytoch@gmail.com",
  //     contactOwnerAlias: "Chheun Chansreytoch",
  //     option: "",
  //   },

  //   {
  //     n: "5",
  //     all: "",
  //     name: "Chheun Chansreytoch",
  //     accountNumber: "Edge Communications",
  //     title: "SVP, Procurement",
  //     phone: "(512) 757-6000",
  //     email: "chheunchansreytoch@gmail.com",
  //     contactOwnerAlias: "Chheun Chansreytoch",
  //     option: "",
  //   },

  //   {
  //     n: "5",
  //     all: "",
  //     name: "Chheun Chansreytoch",
  //     accountNumber: "Edge Communications",
  //     title: "SVP, Procurement",
  //     phone: "(512) 757-6000",
  //     email: "chheunchansreytoch@gmail.com",
  //     contactOwnerAlias: "Chheun Chansreytoch",
  //     option: "",
  //   },
  // ]

  arrCustomers: Array<any> = [];
  arrCustomerDepartments: Array<any> = [];



  constructor(
    private customerStore: CustomerStore,
    private customerDepartmentStore: CustomerDepartmentStore,

  ) { }

  ngOnInit(): void {
    this.fetchCustomers();
    this.fetchCustomerDepartments();
  }

  fetchCustomers() {
    this.customerStore.getCustomers().subscribe((res: any) => {
      this.arrCustomers = res;
    });
  }

  fetchCustomerDepartments() {
    this.customerDepartmentStore.getCustomerDepartments().subscribe((res: any) => {
      this.arrCustomerDepartments = res;
    })
  }

  // fetchCustomerCompany() {
  //   this.customerStore.getCustomers().subscribe((res: any) => {
  //     this.arrCustomerCompany = res;
  //   });
  // }

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
