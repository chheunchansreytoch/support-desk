import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogsService } from 'src/app/services/dialogs.service';

@Component({
  selector: 'app-account-details-page',
  templateUrl: './account-details-page.component.html',
  styleUrls: ['./account-details-page.component.scss']
})
export class AccountDetailsPageComponent implements OnInit {

  constructor(public dialog: MatDialog, public dialogService: DialogsService) { }


  onClickViewAllContact() {
    this.dialogService.openViewAllContactDialog();
  }

  onClickCreateNewContact() {
    this.dialogService.openCreateNewContactDialog();
  }

  onClickViewAllCase() {
    this.dialogService.openViewAllCaseDialog();
  }

  ngOnInit(): void {
  }

}
