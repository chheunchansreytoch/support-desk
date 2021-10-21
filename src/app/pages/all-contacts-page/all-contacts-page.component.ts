import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-contacts-page',
  templateUrl: './all-contacts-page.component.html',
  styleUrls: ['./all-contacts-page.component.scss']
})
export class AllContactsPageComponent implements OnInit {

  rows = [
    {
      n: "1",
      all: "",
      name: "Chheun Chansreytoch",
      accountNumber: "Edge Communications",
      title: "SVP, Procurement",
      phone: "(512) 757-6000",
      email: "chheunchansreytoch@gmail.com",
      contactOwnerAlias: "Chheun Chansreytoch",
      option: "",
    },

    {
      n: "2",
      all: "",
      name: "Chheun Chansreytoch",
      accountNumber: "Edge Communications",
      title: "SVP, Procurement",
      phone: "(512) 757-6000",
      email: "chheunchansreytoch@gmail.com",
      contactOwnerAlias: "Chheun Chansreytoch",
      option: "",
    },

    {
      n: "3",
      all: "",
      name: "Chheun Chansreytoch",
      accountNumber: "Edge Communications",
      title: "SVP, Procurement",
      phone: "(512) 757-6000",
      email: "chheunchansreytoch@gmail.com",
      contactOwnerAlias: "Chheun Chansreytoch",
      option: "",
    },
    {
      n: "4",
      all: "",
      name: "Chheun Chansreytoch",
      accountNumber: "Edge Communications",
      title: "SVP, Procurement",
      phone: "(512) 757-6000",
      email: "chheunchansreytoch@gmail.com",
      contactOwnerAlias: "Chheun Chansreytoch",
      option: "",
    },

    {
      n: "5",
      all: "",
      name: "Chheun Chansreytoch",
      accountNumber: "Edge Communications",
      title: "SVP, Procurement",
      phone: "(512) 757-6000",
      email: "chheunchansreytoch@gmail.com",
      contactOwnerAlias: "Chheun Chansreytoch",
      option: "",
    },

    {
      n: "5",
      all: "",
      name: "Chheun Chansreytoch",
      accountNumber: "Edge Communications",
      title: "SVP, Procurement",
      phone: "(512) 757-6000",
      email: "chheunchansreytoch@gmail.com",
      contactOwnerAlias: "Chheun Chansreytoch",
      option: "",
    },

    {
      n: "5",
      all: "",
      name: "Chheun Chansreytoch",
      accountNumber: "Edge Communications",
      title: "SVP, Procurement",
      phone: "(512) 757-6000",
      email: "chheunchansreytoch@gmail.com",
      contactOwnerAlias: "Chheun Chansreytoch",
      option: "",
    },

    {
      n: "5",
      all: "",
      name: "Chheun Chansreytoch",
      accountNumber: "Edge Communications",
      title: "SVP, Procurement",
      phone: "(512) 757-6000",
      email: "chheunchansreytoch@gmail.com",
      contactOwnerAlias: "Chheun Chansreytoch",
      option: "",
    },

    {
      n: "5",
      all: "",
      name: "Chheun Chansreytoch",
      accountNumber: "Edge Communications",
      title: "SVP, Procurement",
      phone: "(512) 757-6000",
      email: "chheunchansreytoch@gmail.com",
      contactOwnerAlias: "Chheun Chansreytoch",
      option: "",
    },

    {
      n: "5",
      all: "",
      name: "Chheun Chansreytoch",
      accountNumber: "Edge Communications",
      title: "SVP, Procurement",
      phone: "(512) 757-6000",
      email: "chheunchansreytoch@gmail.com",
      contactOwnerAlias: "Chheun Chansreytoch",
      option: "",
    },

    {
      n: "5",
      all: "",
      name: "Chheun Chansreytoch",
      accountNumber: "Edge Communications",
      title: "SVP, Procurement",
      phone: "(512) 757-6000",
      email: "chheunchansreytoch@gmail.com",
      contactOwnerAlias: "Chheun Chansreytoch",
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
