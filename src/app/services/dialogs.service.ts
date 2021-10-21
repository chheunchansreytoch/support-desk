import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAgentsDialogComponent } from '../components/dialogs/create-agents-dialog/create-agents-dialog.component';
import { MoreDetailDialogComponent } from '../components/dialogs/more-detail-dialog/more-detail-dialog.component';
// import { ConfirmMessageDialogComponent } from '../components/dialogs/confirm-message-dialog/confirm-message-dialog.component';
import { ConfirmDialogComponent } from '../components/dialogs/confirm-dialog/confirm-dialog.component';
import { SendToDialogComponent } from '../components/dialogs/send-to-dialog/send-to-dialog.component';
import { ViewAllDialogComponent } from '../components/dialogs/view-all-dialog/view-all-dialog.component';
import { CreateNewDialogComponent } from '../components/dialogs/create-new-dialog/create-new-dialog.component';
import { ViewAllcasesDialogComponent } from '../components/dialogs/view-allcases-dialog/view-allcases-dialog.component';
import { CreateCaseDialogComponent } from '../components/dialogs/create-case-dialog/create-case-dialog.component';
import { AssignToDialogComponent } from '../components/dialogs/assign-to-dialog/assign-to-dialog.component';
import { ViewNotificationDialogComponent } from '../components/dialogs/view-notification-dialog/view-notification-dialog.component';

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

  openSendToDialog() {
    this.dialog.open(SendToDialogComponent);
  }

  openViewAllContactDialog() {
    this.dialog.open(ViewAllDialogComponent);
  }

  openCreateNewContactDialog() {
    this.dialog.open(CreateNewDialogComponent);
  }

  openViewAllCaseDialog() {
    this.dialog.open(ViewAllcasesDialogComponent);
  }

  openCreateCaseDialog() {
    this.dialog.open(CreateCaseDialogComponent);
  }

  openAssignToDialog() {
    this.dialog.open(AssignToDialogComponent);
  }

  openViewNotificationDialog() {
    this.dialog.open(ViewNotificationDialogComponent);
  }

}
