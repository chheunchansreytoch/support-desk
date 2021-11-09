import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogsService } from 'src/app/services/dialogs.service';

@Component({
  selector: 'app-manage-agents-page',
  templateUrl: './manage-agents-page.component.html',
  styleUrls: ['./manage-agents-page.component.scss']
})
export class ManageAgentsPageComponent implements OnInit {

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
      n: "9",
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

    {
      n: "8",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },

    {
      n: "9",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },

    {
      n: "10",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },
    {
      n: "11",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },
  ];

  constructor(public dialog: MatDialog,
    public dialogService: DialogsService) { }

  onCreate() {
    this.dialogService.openCreateDialog();
  }

  onMoreDetailDialog() {
    this.dialogService.openDetailDialog();
  }

  onUpdate() {

  }

  onDelete() {
    this.dialogService.openConfirmDialog();
  }

  ngOnInit(): void {

  }
}

