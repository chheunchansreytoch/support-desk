import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})

export class DefaultPageComponent implements OnInit {

//create data table
  rows = [
    {
      n: "1",
      all: "",
      caseNumber: "00001002",
      contactName: "Chheun Chansreytoch",
      subject: "Dialog issues with text and form",
      status: "New",
      priority: "Low",
      dateTime: "5/19/2021, 2:07 PM",
      caseOwner: "Chheun Chansreytoch",
      option: "",
    },
    {
      n: "2",
      all: "",
      caseNumber: "00001002",
      contactName: "Chheun Chansreytoch",
      subject: "Dialog issues with text and form",
      status: "New",
      priority: "Low",
      dateTime: "5/19/2021, 2:07 PM",
      caseOwner: "Chheun Chansreytoch",
      option: "",
    },

    {
      n: "3",
      all: "",
      caseNumber: "00001002",
      contactName: "Chheun Chansreytoch",
      subject: "Dialog issues with text and form",
      status: "New",
      priority: "Low",
      dateTime: "5/19/2021, 2:07 PM",
      caseOwner: "Chheun Chansreytoch",
      option: "",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

//select checkbox
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
