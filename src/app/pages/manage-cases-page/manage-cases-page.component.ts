import { Component, OnInit } from '@angular/core';
import { Department_IT } from 'src/app/typeScripts/department_IT';
import { Department_Accounting } from 'src/app/typeScripts/department_accounting';
import { Department_Payroll } from 'src/app/typeScripts/department_payroll';
import { DialogsService } from 'src/app/services/dialogs.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-manage-cases-page',
  templateUrl: './manage-cases-page.component.html',
  styleUrls: ['./manage-cases-page.component.scss']
})
export class ManageCasesPageComponent implements OnInit {

  selectedValue = 'none';
  public selecedBtnCancel;
  private departmentIT_statusValue;

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

    {
      n: "7",
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
      n: "8",
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
      n: "9",
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
      n: "10",
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
      n: "11",
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


  constructor(public dialog: MatDialog, public dialogService: DialogsService) { }

  ngOnInit(): void {
  }

  //createCasetoogleTag
  showCasePopup:boolean=false
  createCasetoogleTag() {
    //this.assignCasetoogleTag();
    this.showCasePopup=!this.showCasePopup
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

  // onClickCreateCase() {
  //   this.dialogService.openCreateCaseDialog();
  // }

// *** create select departments ***
  SelectAgentName: string = '';

  departments_IT: Department_IT [] = [
    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },
  ];

  // checkStatusValue() {
  //   let value = Object(this.departments_IT)["status"];
  //   console.log(value);
  // }

  departments_account: Department_Accounting [] = [
    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },
  ]

  departments_payroll: Department_Payroll [] = [
    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },
  ]

  radioChangeHandler (e:any) {
    this.SelectAgentName = e.target.value;
  }


// checkbox table
  checks=false;
  checkAll(e:any) {
    if(e.target.checked==true) {
      this.checks=true;
    }
    else {
      this.checks=false;
    }
  }

// checkToAssign list
Checked=false;
isChecked(e:any){
  if(e.target.checked==true) {
    this.Checked=true;
  }
  else {
    this.Checked=false;
  }
}




}
