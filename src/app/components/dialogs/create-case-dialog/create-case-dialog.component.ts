import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogData } from 'src/app/models/IDialog.model';
import { AgentStore } from 'src/app/stores/agent.store';
import { AgentDepartmentStore } from 'src/app/stores/agentDepartment.store';
import { CaseStore } from 'src/app/stores/case.store';
import { PriorityStore } from 'src/app/stores/priority.store';
import { StatusStore } from 'src/app/stores/status.store';
import { AlertInformationDialogComponent } from '../../alert-information-dialog/alert-information-dialog.component';

@Component({
  selector: 'app-create-case-dialog',
  templateUrl: './create-case-dialog.component.html',
  styleUrls: ['./create-case-dialog.component.scss']
})
export class CreateCaseDialogComponent implements OnInit {

  //registrationForm: FormGroup;
  arrAgentDepartments: Array<any> = [];
  arrAgentsByDepartments: Array<any> = [];
  arrStatuses: Array<any> = [];
  arrPriorities: Array<any> = [];

  getDepartmentIdFromFormData= '';

  constructor(
    private caseStore: CaseStore,
    private dialog: MatDialog,
    public agentStore: AgentStore,
    private agentDepartmentStore: AgentDepartmentStore,
    private statusStore: StatusStore,
    private priorityStore: PriorityStore,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CreateCaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    // this.registrationForm = formBuilder.group({
    //   caseNumber: new FormControl('', Validators.required),
    //   status: new FormControl('New', Validators.required),
    //   priority: new FormControl('High', Validators.required),
    //   agentDepartment: new FormControl('', Validators.required),
    //   agent:  new  FormControl('', Validators.required),
    //   subject: new FormControl('', Validators.required),
    //   description: new FormControl('', Validators.required),
    // }, {

    // });
   }

  ngOnInit(): void {
  }

  // async formSubmitted(formData: any) {
  //   if (this.registrationForm.valid) {
  //     this.registrationForm.disable();
  //     const { caseNumber, status, priority, agentDepartment, agent, subject, description} = formData;

  //     if(!this.data) {
  //       const fd = new FormData();

  //       fd.append('caseNumber', caseNumber);
  //       fd.append('status', status);
  //       fd.append('priority', priority);
  //       fd.append('agentDepartment', agentDepartment);
  //       fd.append('agent', agent);
  //       fd.append('subject', subject);
  //       fd.append('description', description);
  //       // fd.append('description', this.description?.item(0) as any, this.selectedProfiles?.item(0)?.name);
  //       // fd.append('createdBy', this.managerStore.getCurrentUser.id)

  //       await this.caseStore.addCase_FormData(fd);
  //     } else {
  //       const fd = new FormData();

  //       fd.append('caseNumber', caseNumber);
  //       fd.append('status', status);
  //       fd.append('priority', priority);
  //       fd.append('agentDepartment', agentDepartment);
  //       fd.append('agent', agent);
  //       fd.append('subject', subject);
  //       fd.append('description', description);

  //       await this.caseStore.updateCaseFormData(this.data?.id, fd);
  //     }

  //     this.registrationForm.enable();
  //     this.registrationForm.reset();

  //     this.dialog.open(AlertInformationDialogComponent, {
  //       width: '500px',
  //       data: {
  //         title: this.data ? 'Update Agent' : 'Create Agent',
  //         type: 'success',
  //         content: this.data ? `Agent is updated.` : `Agent is created.`
  //       } as IDialogData,
  //       disableClose: true,
  //     });
  //   }

  //   return;
  // }

  // fetchAgentsDepartment() {
  //   this.agentDepartmentStore.getAgentDepartments().subscribe((res: any) => {
  //     this.arrAgentDepartments = res;
  //   });
  // }

  // fetchAgentsByDepartment() {
  //   this.agentStore.getAgentsByDepartment(this.getDepartmentIdFromFormData).then((res: any) => {
  //     this.arrAgentsByDepartments = res;
  //   });
  // }

  // fetchStatuses() {
  //   this.statusStore.getStatuses().subscribe((res: any) => {
  //     this.arrStatuses = res;
  //   })
  // }

  // fetchPriorities() {
  //   this.priorityStore.getPriorities().subscribe((res: any) => {
  //     this.arrPriorities = res;
  //   })
  // }

}
