import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-accounts-page',
  templateUrl: './all-accounts-page.component.html',
  styleUrls: ['./all-accounts-page.component.scss']
})
export class AllAccountsPageComponent implements OnInit {

  selectedOption = '3';

  constructor(){}

  // create data table
  rows = [
    {
      n: "1",
      all: "",
      accountName: "Edge Communications",
      phone: "(512) 757-6000",
      type: "Customer-Direct",
      accountOwnerAlias: "Chheun chansreytoch",
      option: "",
    },

    {
      n: "2",
      all: "",
      accountName: "Edge Communications",
      phone: "(512) 757-6000",
      type: "Customer-Direct",
      accountOwnerAlias: "Chheun chansreytoch",
      option: "",
    },
    {
      n: "3",
      all: "",
      accountName: "Edge Communications",
      phone: "(512) 757-6000",
      type: "Customer-Direct",
      accountOwnerAlias: "Chheun chansreytoch",
      option: "",
    },

    {
      n: "4",
      all: "",
      accountName: "Edge Communications",
      phone: "(512) 757-6000",
      type: "Customer-Direct",
      accountOwnerAlias: "Chheun chansreytoch",
      option: "",
    },

    {
      n: "5",
      all: "",
      accountName: "Edge Communications",
      phone: "(512) 757-6000",
      type: "Customer-Direct",
      accountOwnerAlias: "Chheun chansreytoch",
      option: "",
    },

    {
      n: "6",
      all: "",
      accountName: "Edge Communications",
      phone: "(512) 757-6000",
      type: "Customer-Direct",
      accountOwnerAlias: "Chheun chansreytoch",
      option: "",
    },

    {
      n: "7",
      all: "",
      accountName: "Edge Communications",
      phone: "(512) 757-6000",
      type: "Customer-Direct",
      accountOwnerAlias: "Chheun chansreytoch",
      option: "",
    },

    {
      n: "8",
      all: "",
      accountName: "Edge Communications",
      phone: "(512) 757-6000",
      type: "Customer-Direct",
      accountOwnerAlias: "Chheun chansreytoch",
      option: "",
    },

    {
      n: "9",
      all: "",
      accountName: "Edge Communications",
      phone: "(512) 757-6000",
      type: "Customer-Direct",
      accountOwnerAlias: "Chheun chansreytoch",
      option: "",
    },
  ]

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
