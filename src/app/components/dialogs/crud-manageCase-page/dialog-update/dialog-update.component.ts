import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CaseStore } from 'src/app/stores/case.store';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

@Component({
  selector: 'app-dialog-update',
  templateUrl: './dialog-update.component.html',
  styleUrls: ['./dialog-update.component.scss']
})
export class DialogUpdateComponent implements OnInit {

  arrCases: Array<any> = [];

  constructor(
    private caseStore: CaseStore,
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {

  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

  fetchAgents() {
    this.caseStore.getCases().subscribe((res: any) => {
      this.arrCases = res;
    });
  }

  onClickUpdateCase() {

  }

}
