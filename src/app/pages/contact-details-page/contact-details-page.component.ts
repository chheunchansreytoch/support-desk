import { Component, OnInit } from '@angular/core';
import { DialogsService } from 'src/app/services/dialogs.service';

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  constructor(public dialogService: DialogsService) { }

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
