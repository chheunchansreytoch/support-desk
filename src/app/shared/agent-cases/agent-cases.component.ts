import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agent-cases',
  templateUrl: './agent-cases.component.html',
  styleUrls: ['./agent-cases.component.scss']
})
export class AgentCasesComponent implements OnInit {

  constructor() {}

  //  create data table
   rows = [
    {
      n: "1",
      all: "",
      caseNumber: "00001002",
      contactName: "Chheun Chansreytoch",
      subject: "Dialog issues with text and form",
      status: " ",
      priority: " ",
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
      status: " ",
      priority: " ",
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
      status: " ",
      priority: " ",
      dateTime: "5/19/2021, 2:07 PM",
      caseOwner: "Chheun Chansreytoch",
      option: "",
    },
    {
      n: "1",
      all: "",
      caseNumber: "00001002",
      contactName: "Chheun Chansreytoch",
      subject: "Dialog issues with text and form",
      status: " ",
      priority: " ",
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
      status: " ",
      priority: " ",
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
      status: " ",
      priority: " ",
      dateTime: "5/19/2021, 2:07 PM",
      caseOwner: "Chheun Chansreytoch",
      option: "",
    },
    {
      n: "1",
      all: "",
      caseNumber: "00001002",
      contactName: "Chheun Chansreytoch",
      subject: "Dialog issues with text and form",
      status: " ",
      priority: " ",
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
      status: " ",
      priority: " ",
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
      status: " ",
      priority: " ",
      dateTime: "5/19/2021, 2:07 PM",
      caseOwner: "Chheun Chansreytoch",
      option: "",
    },
    {
      n: "1",
      all: "",
      caseNumber: "00001002",
      contactName: "Chheun Chansreytoch",
      subject: "Dialog issues with text and form",
      status: " ",
      priority: " ",
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
      status: " ",
      priority: " ",
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
      status: " ",
      priority: " ",
      dateTime: "5/19/2021, 2:07 PM",
      caseOwner: "Chheun Chansreytoch",
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
