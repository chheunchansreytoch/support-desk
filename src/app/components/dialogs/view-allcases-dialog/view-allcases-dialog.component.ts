import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-allcases-dialog',
  templateUrl: './view-allcases-dialog.component.html',
  styleUrls: ['./view-allcases-dialog.component.scss']
})
export class ViewAllcasesDialogComponent implements OnInit {

  rows = [
    {
      n: "1",
      all: "",
      caseNumber: "00001002",
      contactName: "Chheun Chansreytoch",
      subject: "Dialog issues with text and form",
      status: "Closed",
      priority: "High",
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
      status: "Closed",
      priority: "High",
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
      status: "Closed",
      priority: "High",
      dateTime: "5/19/2021, 2:07 PM",
      caseOwner: "Chheun Chansreytoch",
      option: "",
    },

    {
      n: "4",
      all: "",
      caseNumber: "00001002",
      contactName: "Chheun Chansreytoch",
      subject: "Dialog issues with text and form Dialog issues with text and form Dialog issues with text and form Dialog issues with text and form",
      status: "Closed",
      priority: "High",
      dateTime: "5/19/2021, 2:07 PM",
      caseOwner: "Chheun Chansreytoch",
      option: "",
    },

    {
      n: "5",
      all: "",
      caseNumber: "00001002",
      contactName: "Chheun Chansreytoch",
      subject: "Dialog issues with text and form Dialog issues with text and form Dialog issues with text and form Dialog issues with text and form",
      status: "Closed",
      priority: "High",
      dateTime: "5/19/2021, 2:07 PM",
      caseOwner: "Chheun Chansreytoch",
      option: "",
    },

    {
      n: "6",
      all: "",
      caseNumber: "00001002",
      contactName: "Chheun Chansreytoch",
      subject: "Dialog issues with text and form Dialog issues with text and form Dialog issues with text and form Dialog issues with text and form",
      status: "Closed",
      priority: "High",
      dateTime: "5/19/2021, 2:07 PM",
      caseOwner: "Chheun Chansreytoch",
      option: "",
    },

    {
      n: "7",
      all: "",
      caseNumber: "00001002",
      contactName: "Chheun Chansreytoch",
      subject: "Dialog issues with text and form Dialog issues with text and form Dialog issues with text and form Dialog issues with text and form",
      status: "Closed",
      priority: "High",
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
