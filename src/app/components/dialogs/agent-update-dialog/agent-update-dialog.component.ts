import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AgentStore } from 'src/app/stores/agent.store';
import { CaseStore } from 'src/app/stores/case.store';

@Component({
  selector: 'app-agent-update-dialog',
  templateUrl: './agent-update-dialog.component.html',
  styleUrls: ['./agent-update-dialog.component.scss']
})
export class AgentUpdateDialogComponent implements OnInit {

  form:any = FormGroup;
  constructor(
    private f: FormBuilder,
    private agentStore: AgentStore,
    public dialogRef: MatDialogRef<AgentUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
  }

  selectedProfiles: FileList | null = null;
  onUploadProfileChanged(event) {
    this.selectedProfiles = event.target.files;
  }

  async updateCase(formData: any) {
    if(this.form.valid) {
      this.form.disable();
      const {confirmPassword, department, email, gender, password, username } = formData;
      const fd = new FormData();

      fd.append('username', username);
      fd.append('email', email);
      fd.append('department', department);
      fd.append('gender', gender);

      if(this.selectedProfiles)
      fd.append('file', this.selectedProfiles?.item(0) as any, this.selectedProfiles?.item(0)?.name);

      await this.agentStore.updateAgent_FormData(this.data?.id, fd);
    }
    this.form.enable();
    this.form.reset();
  }
}
