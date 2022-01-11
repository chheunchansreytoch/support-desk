import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogData } from 'src/app/models/IDialog.model';
import { AgentStore } from 'src/app/stores/agent.store';
import { AgentDepartmentStore } from 'src/app/stores/agentDepartment.store';
import { ManagerStore } from 'src/app/stores/manager.store';
import { AlertInformationDialogComponent } from '../../alert-information-dialog/alert-information-dialog.component';

@Component({
  selector: 'app-create-agents-dialog',
  templateUrl: './create-agents-dialog.component.html',
  styleUrls: ['./create-agents-dialog.component.scss']
})
export class CreateAgentsDialogComponent implements OnInit {

  SelectGender: string = '';
  registrationForm: FormGroup;
  arrAgents: Array<any> = [];
  arrAgentDepartments: Array<any> = [];
  arrManagers: Array<any> = [];
  genders = ['Male', 'Female'];

  constructor(
    public agentDepartmentStore: AgentDepartmentStore,
    public agentStore: AgentStore,
    public managerStore: ManagerStore,

    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateAgentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data)
    this.registrationForm = formBuilder.group({
      username: new FormControl(this.data?.username || null, Validators.required),
      email: new FormControl(this.data?.email || null, [Validators.required, Validators.email]),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      department: new FormControl(this.data?.agentDepartment?.id || null, Validators.required),
      gender: new FormControl(this.data?.gender || 'Male', Validators.required),
    }, {
      validators: ConfirmedValidator('password', 'confirmPassword')
    });

    if (!this.data) {
      this.registrationForm.controls["password"].setValidators([Validators.required])
      this.registrationForm.controls["confirmPassword"].setValidators([Validators.required])
    }
  };

  fetchAgentDepartments() {
    this.agentDepartmentStore.getAgentDepartments().subscribe((res: any) => {
      this.arrAgentDepartments = res;
    });
  }

  selectedProfiles: FileList | null = null;
  onUploadProfileChanged(event) {
    this.selectedProfiles = event.target.files;
  }

  async formSubmitted(formData: any) {
    if (this.registrationForm.valid) {
      this.registrationForm.disable();
      const { confirmPassword, department, email, gender, password, username } = formData;

      if(!this.data) {
        const fd = new FormData();

        fd.append('username', username);
        fd.append('email', email);
        fd.append('password', password);
        fd.append('confirmPassword', confirmPassword);
        fd.append('department', department);
        fd.append('gender', gender);
        fd.append('file', this.selectedProfiles?.item(0) as any, this.selectedProfiles?.item(0)?.name);
        fd.append('createdBy', this.managerStore.getCurrentUser.id)

        await this.agentStore.addAgent_FormData(fd);
      } else {
        const fd = new FormData();

        fd.append('username', username);
        fd.append('email', email);
        fd.append('department', department);
        fd.append('gender', gender);

        if(this.selectedProfiles)
          fd.append('file', this.selectedProfiles?.item(0) as any, this.selectedProfiles?.item(0)?.name);

        await this.agentStore.updateAgent_FormData(this.data?.id, fd);
      }

      this.registrationForm.enable();
      this.registrationForm.reset();

      this.dialog.open(AlertInformationDialogComponent, {
        width: '500px',
        data: {
          title: this.data ? 'Update Agent' : 'Create Agent',
          type: 'success',
          content: this.data ? `Agent is updated.` : `Agent is created.`
        } as IDialogData,
        disableClose: true,
      });
      this.selectedProfiles = null;
    }
    return;
  }

  radioChangeHandler(e: any) {
    this.SelectGender = e.target.value;
    console.log(this.SelectGender);
  }

  ngOnInit(): void {
    this.fetchAgentDepartments();
  }
}

export function ConfirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
