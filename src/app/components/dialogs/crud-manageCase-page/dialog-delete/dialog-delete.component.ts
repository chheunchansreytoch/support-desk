import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CaseStore } from 'src/app/stores/case.store';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {

  arrCases: Array<any> = [];

  constructor(
    private caseStore: CaseStore,
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  fetchAgents() {
    this.caseStore.getCases().subscribe((res: any) => {
      this.arrCases = res;
    });
  }

  onClickDeleteCase() {
    this.dialogRef.close(this.data);
  }
}
