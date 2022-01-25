import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CaseStore } from 'src/app/stores/case.store';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {

  cls: string = '';
  arrCases: Array<any> = [];

  constructor(
    private caseStore: CaseStore,
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
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
    this.fetchCases();
  }

  onNoClick(): void {
    this.dialogRef.close('no');
  }

  fetchCases() {
    this.caseStore.getAllCases().subscribe((res: any) => {
      this.arrCases = res;
    });
  }

  onClickDeleteCase() {
    this.dialogRef.close(this.data);
  }
}
