import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from 'src/app/components/dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { DialogsService } from 'src/app/services/dialogs.service';
import { AgentStore } from 'src/app/stores/agent.store';

@Component({
  selector: 'app-manage-agents-page',
  templateUrl: './manage-agents-page.component.html',
  styleUrls: ['./manage-agents-page.component.scss']
})
export class ManageAgentsPageComponent implements OnInit {

  arrAgents: Array<any> = [];
  numOfAgents = [''];

  constructor(
    public dialog: MatDialog,
    public dialogService: DialogsService,
    private agentStore: AgentStore
  ) { }

  fetchAgents() {
    return this.agentStore.getAgents().subscribe((res: any) => {
      this.arrAgents = res;
      //console.log(this.arrAgents);
    });
  }



  onCreate() {
    this.dialogService.openCreateDialog();
  }

  onMoreDetailDialog() {
    this.dialogService.openDetailDialog();
  }

  onUpdate() {
    //this.dialogService.openConfirmDialog
  }

  onSelectedAgent(agentId) {
    if(agentId) {
      const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
        data: agentId
      });
      dialogRef.afterClosed().subscribe(async (result: any) => {
        if(!result) return;
        await this.agentStore.deleteAgent(result);
        console.log(result);
        alert("Delete Successfully!");
      });
    }
    return;
  }

  ngOnInit(): void {
    this.fetchAgents();
  }
}

