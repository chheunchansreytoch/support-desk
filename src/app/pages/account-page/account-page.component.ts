import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {

  rows = [
    {
      n: "1",
      all: "",
      accountNumber: "Edge Communications",
      accountSite: "",
      billingStateProvince: "TX",
      phone: "(512) 757-6000",
      type: "Customer-Direct",
      accountOwnerAlias: "Chheun chansreytoch",
      option: "",
    },

    {
      n: "2",
      all: "",
      accountNumber: "Edge Communications",
      accountSite: "",
      billingStateProvince: "TX",
      phone: "(512) 757-6000",
      type: "Customer-Direct",
      accountOwnerAlias: "Chheun chansreytoch",
      option: "",
    },
    {
      n: "3",
      all: "",
      accountNumber: "Edge Communications",
      accountSite: "",
      billingStateProvince: "TX",
      phone: "(512) 757-6000",
      type: "Customer-Direct",
      accountOwnerAlias: "Chheun chansreytoch",
      option: "",
    },

  ]


  constructor() { }

  ngOnInit(): void {
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
