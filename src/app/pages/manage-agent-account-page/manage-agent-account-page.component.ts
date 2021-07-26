import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-manage-agent-account-page',
  templateUrl: './manage-agent-account-page.component.html',
  styleUrls: ['./manage-agent-account-page.component.scss']
})
export class ManageAgentAccountPageComponent implements OnInit {

  items = [
    {
      n: "1",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      action: "",
    },
    {
      n: "2",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },
    {
      n: "3",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },
    {
      n: "4",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },
    {
      n: "5",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },
    {
      n: "6",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },
    {
      n: "7",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },

    // {
    //   n: "7",
    //   agentName: "Chheun Chansreytoch",
    //   jobPosition: "Developer",
    //   status: "Working",
    //   agentInfo: "",
    //   Action: "",
    // },
  ]

  constructor(public dialog: MatDialog) { }

  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //      this.animal = result;
  //   });
  // }

  ngOnInit(): void {
  }
}

@Component({
  selector: 'app-manage-agent-account-page',
  templateUrl: './manage-agent-account-page.component.html',
  styleUrls: ['./manage-agent-account-page.component.scss']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
