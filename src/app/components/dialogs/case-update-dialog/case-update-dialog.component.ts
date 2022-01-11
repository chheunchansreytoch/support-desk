import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgentStore } from 'src/app/stores/agent.store';
import { AgentDepartmentStore } from 'src/app/stores/agentDepartment.store';
import { CaseStore } from 'src/app/stores/case.store';
import { PriorityStore } from 'src/app/stores/priority.store';
import { StatusStore } from 'src/app/stores/status.store';

@Component({
  selector: 'app-case-update-dialog',
  templateUrl: './case-update-dialog.component.html',
  styleUrls: ['./case-update-dialog.component.scss']
})
export class CaseUpdateDialogComponent implements OnInit {

  form:any = FormGroup;

  constructor(
  private f: FormBuilder,
  private caseStore: CaseStore,
  public agentStore: AgentStore,
  private agentDepartmentStore: AgentDepartmentStore,
  private statusStore: StatusStore,
  private priorityStore: PriorityStore,
  public dialogRef: MatDialogRef<CaseUpdateDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  async updateCaseForm() {
    this.form = this.f.group({
      caseNumber: [this.data.caseNumber, Validators.required],
      status: [this.data.status, Validators.required],
      priority: [this.data.priority, Validators.required],
      agentDepartment: [this.data.agentDepartment, Validators.required],
      agent: [this.data.agent, Validators.required],
      subject: [this.data.subject, Validators.required],
      description: [this.data.description, Validators.required],

    })
  }

}
