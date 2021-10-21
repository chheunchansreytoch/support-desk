import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent-contacts',
  templateUrl: './agent-contacts.component.html',
  styleUrls: ['./agent-contacts.component.scss']
})
export class AgentContactsComponent implements OnInit {

  selectedOption = '3';
  public Items;

  // constructor(public router: Router, private location: Location){
  //   this.Items = [
  //     {name: 'All Contacts'},
  //     {name: 'My Contacts'},
  //     {name: 'Recently Viewed'},
  //     {name: 'Recently Viewed Contacts'},
  //   ]
  // }


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
