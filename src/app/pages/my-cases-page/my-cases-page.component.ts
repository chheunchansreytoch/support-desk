import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cases-page',
  templateUrl: './my-cases-page.component.html',
  styleUrls: ['./my-cases-page.component.scss']
})
export class MyCasesPageComponent implements OnInit {

  selectedOption = '3';

  //create data table
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
  ]

  constructor() { }

  ngOnInit(): void {
  }

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

  // constructor() { }

  // ngOnInit(): void {
  // }

}
