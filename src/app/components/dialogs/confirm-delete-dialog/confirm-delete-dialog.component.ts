import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgentStore } from 'src/app/stores/agent.store';

@Component({
  selector: 'app-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.scss']
})
export class ConfirmDeleteDialogComponent implements OnInit {

  arrAgents: Array<any> = [];

  constructor(
    private agentStore: AgentStore,
    public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  fetchAgents() {
    this.agentStore.getAgents().subscribe((res: any) => {
      this.arrAgents = res;
    });
  }

  onClickDeleteAgent() {

    this.dialogRef.close(this.data);
  }



}
