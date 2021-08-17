import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-closed-cases-page',
  templateUrl: './all-closed-cases-page.component.html',
  styleUrls: ['./all-closed-cases-page.component.scss']
})
export class AllClosedCasesPageComponent implements OnInit {


  selectedOption = '3';

  //create data table
  rows = [
    {
      n: "1",
      all: "",
      caseNumber: "00001002",
      contactName: "Chheun Chansreytoch",
      subject: "Dialog issues with text and form",
      status: "",
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

  // selectedOption = '3';

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
  constructor() { }

  ngOnInit(): void {
  }

}
