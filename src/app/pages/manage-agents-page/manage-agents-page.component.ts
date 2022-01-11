import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertInformationDialogComponent } from 'src/app/components/alert-information-dialog/alert-information-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { ConfirmDeleteDialogComponent } from 'src/app/components/dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { CreateAgentsDialogComponent } from 'src/app/components/dialogs/create-agents-dialog/create-agents-dialog.component';
import { IDialogData } from 'src/app/models/IDialog.model';
import { DialogsService } from 'src/app/services/dialogs.service';
import { AgentStore } from 'src/app/stores/agent.store';
import { PaginationStore } from 'src/app/stores/pagination.store';

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

    public paginationStore: PaginationStore,
    private agentStore: AgentStore
  ) { }

  fetchAgents() {
    return this.paginationStore.getAgentsWithPagination(10, 0, '');
  }

  onCreate(item: any) {
    const dialogRef = this.dialog.open(CreateAgentsDialogComponent, {
      width: '600px',
      height: '96vh',
      data: item
    });

    dialogRef.updatePosition({ top: '2vh', right: '2vh' });
    dialogRef.afterClosed().subscribe(() => {
      this.fetchAgents();
    })
  }

  onMoreDetailDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: {
        title: 'Delete Agent',
        type: 'question',
        content: 'Are you sure that you want to delete this selected agent?'
      } as IDialogData,
      disableClose: true,
    });
  }

  onUpdate() {

  }

  onSelectedAgent(agentId) {
    if(agentId) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '500px',
        data: {
          title: 'Delete Agent',
          type: 'question',
          content: 'Are you sure that you want to delete this selected agent?'
        } as IDialogData,
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe(async (result: any) => {
        if(!result || result === 'no') return;
        await this.agentStore.deleteAgent(agentId);

        this.dialog.open(AlertInformationDialogComponent, {
          width: '500px',
          data: {
            title: 'Delete Agent',
            type: 'success',
            content: `Agent is deleted.`
          } as IDialogData,
          disableClose: true,
        });

        this.paginationStore.getAgentsWithPagination(10, 0, '');
      });
    }
    return;
  }

  ngOnInit(): void {
    this.fetchAgents();

    const obj = document.getElementById("animatedNumber0");
    this.animateValue(obj, 0, 250, 2000);
  }

  animateValue(obj, start, end, duration) {
    let startTimestamp = null || 0;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  checkLocalStoragePath(str: string) {
    if(str.includes('public/')) {
      str = str.replace('public/', '');
      return 'http://localhost:3000/' + str;
    } else return str;
  }
}

