import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAgentsDialogComponent } from '../components/dialogs/create-agents-dialog/create-agents-dialog.component';
import { MoreDetailDialogComponent } from '../components/dialogs/more-detail-dialog/more-detail-dialog.component';
// import { ConfirmMessageDialogComponent } from '../components/dialogs/confirm-message-dialog/confirm-message-dialog.component';
import { ConfirmDialogComponent } from '../components/dialogs/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {

  constructor(private dialog: MatDialog
    ) { }

  openCreateDialog() {
    this.dialog.open(CreateAgentsDialogComponent);
  }

  openDetailDialog() {
    this.dialog.open(MoreDetailDialogComponent);
  }

  openConfirmDialog() {
    // this.dialog.open(ConfirmMessageDialogComponent);
    this.dialog.open(ConfirmDialogComponent);
  }
}
