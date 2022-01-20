import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogData } from 'src/app/models/IDialog.model';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  cls: string = '';

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDialogData
  ) {
    switch(this.data.type) {
      case 'warning': this.cls = 'message-content-warning'; break;
      case 'success': this.cls = 'message-content-success'; break;
      case 'failed': this.cls = 'message-content-failed'; break;
      case 'information': this.cls = 'message-content-information'; break;
      case 'question': this.cls = 'message-content-question'; break;
    }
  }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close('no');
  }
}
