import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-agent-delete-case-dialog',
  templateUrl: './agent-delete-case-dialog.component.html',
  styleUrls: ['./agent-delete-case-dialog.component.scss']
})
export class AgentDeleteCaseDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AgentDeleteCaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  onClickDelete() {
    this.dialogRef.close(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }
}
