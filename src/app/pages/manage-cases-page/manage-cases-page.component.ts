import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-cases-page',
  templateUrl: './manage-cases-page.component.html',
  styleUrls: ['./manage-cases-page.component.scss']
})
export class ManageCasesPageComponent implements OnInit {

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

    {
      n: "4",
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
      n: "5",
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
      n: "6",
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

    // {
    //   n: "7",
    //   all: "",
    //   caseNumber: "00001002",
    //   contactName: "Chheun Chansreytoch",
    //   subject: "Dialog issues with text and form",
    //   status: "New",
    //   priority: "Low",
    //   dateTime: "5/19/2021, 2:07 PM",
    //   caseOwner: "Chheun Chansreytoch",
    //   option: "",
    // },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  //createCasetoogleTag
  showCasePopop:boolean=false
  createCasetoogleTag() {
    this.showCasePopop=!this.showCasePopop
  }

  //assignCasetoogleTag
  showAssignPopop:boolean=false
  assignCasetoogleTag() {
    this.showAssignPopop=!this.showAssignPopop
  }

  //department button
  showdepartmentBtn:boolean=false
  departmentBtn() {
    this.showdepartmentBtn=!this.showdepartmentBtn
  }

    //department button
  // showSelectOption1:boolean=false
  // electOption1() {
  //   this.showSelectOption1=!this.showSelectOption1
  // }




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
