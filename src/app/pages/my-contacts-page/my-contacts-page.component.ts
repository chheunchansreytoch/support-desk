import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-contacts-page',
  templateUrl: './my-contacts-page.component.html',
  styleUrls: ['./my-contacts-page.component.scss']
})
export class MyContactsPageComponent implements OnInit {

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
