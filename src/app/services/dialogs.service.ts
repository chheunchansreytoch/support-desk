import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateAgentsDialogComponent } from '../components/dialogs/create-agents-dialog/create-agents-dialog.component';
import { MoreDetailDialogComponent } from '../components/dialogs/more-detail-dialog/more-detail-dialog.component';
import { SendToDialogComponent } from '../components/dialogs/send-to-dialog/send-to-dialog.component';
import { ViewAllDialogComponent } from '../components/dialogs/view-all-dialog/view-all-dialog.component';
import { CreateNewDialogComponent } from '../components/dialogs/create-new-dialog/create-new-dialog.component';
import { ViewAllcasesDialogComponent } from '../components/dialogs/view-allcases-dialog/view-allcases-dialog.component';
import { CreateCaseDialogComponent } from '../components/dialogs/create-case-dialog/create-case-dialog.component';
import { ViewNotificationDialogComponent } from '../components/dialogs/view-notification-dialog/view-notification-dialog.component';
import { ConfirmDeleteDialogComponent } from '../components/dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { DialogDeleteComponent } from '../components/dialogs/crud-manageCase-page/dialog-delete/dialog-delete.component';
import { DialogUpdateComponent } from '../components/dialogs/crud-manageCase-page/dialog-update/dialog-update.component';


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

  openDeleteConfirmDialog() {
    this.dialog.open(ConfirmDeleteDialogComponent);
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

  openViewNotificationDialog() {
    this.dialog.open(ViewNotificationDialogComponent);
  }

  openDeleteCaseDialog() {
    this.dialog.open(DialogDeleteComponent);
  }

  openUpdateCaseDialog() {
    this.dialog.open(DialogUpdateComponent);
  }

}
