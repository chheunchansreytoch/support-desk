import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogData } from 'src/app/models/IDialog.model';
import { AgentStore } from 'src/app/stores/agent.store';
import { AgentDepartmentStore } from 'src/app/stores/agentDepartment.store';
import { CaseStore } from 'src/app/stores/case.store';
import { ManagerStore } from 'src/app/stores/manager.store';
import { PriorityStore } from 'src/app/stores/priority.store';
import { StatusStore } from 'src/app/stores/status.store';
import { AlertInformationDialogComponent } from '../../alert-information-dialog/alert-information-dialog.component';

@Component({
  selector: 'app-case-update-dialog',
  templateUrl: './case-update-dialog.component.html',
  styleUrls: ['./case-update-dialog.component.scss']
})
export class CaseUpdateDialogComponent implements OnInit {

  updateForm!: FormGroup;
  disabled = true;

  arrAgentDepartments: Array<any> = [];
  arrAgentsByDepartments: Array<any> = [];
  arrStatuses: Array<any> = [];
  arrPriorities: Array<any> = [];
  arrManagers: Array<any> = [];
  arrCases: Array<any> = [];

  getDepartmentIdFromFormData= '';

  constructor(
    private caseStore: CaseStore,
    private managerStore: ManagerStore,
    private dialog: MatDialog,
    public agentStore: AgentStore,
    private agentDepartmentStore: AgentDepartmentStore,
    private statusStore: StatusStore,
    private priorityStore: PriorityStore,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<CaseUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.updateForm = formBuilder.group({
      caseNumber: new FormControl(data?.caseNumber ?? '', Validators.required),
      status: new FormControl(data?.status?.id ?? 'New', Validators.required),
      priority: new FormControl(data?.priority?.id ?? 'High', Validators.required),
      agentDepartment: new FormControl(data?.agent?.agentDepartment?.id ?? '', Validators.required),
      agent: new FormControl('', Validators.required),
      subject: new FormControl(data?.subject ?? '', Validators.required),
      description: new FormControl(data?.description ?? '', Validators.required),
    });
   }

  async ngOnInit(): Promise<void> {
    this.fetchStatuses();
    this.fetchPriorities();
    this.fetchAgentsDepartment();

    if(this.data) {
      const id = this.data?.agent?.agentDepartment?.id;
      const agents = await this.agentStore.getAgentsByDepartment(id);
      this.agentsBySelectedDepartment = agents as Array<any>;

      this.updateForm.controls['agent'].setValue(this.data?.agent?.id)
    }
  }

  async formSubmitted(formData: any) {
    //console.log(formData.agentDepartment);
    if(this.updateForm.valid) {
      const { status, priority, agent } = formData;

      if(this.data) {
        const caseData = {
          ...formData,
          createdBy: this.managerStore.getCurrentUser.id,
          status: { id: status },
          priority: { id: priority },
          agent: {id: agent},
          id: this.data.id
        };
        await this.caseStore.updateCase(caseData);

      }

      this.updateForm.enable();
      this.updateForm.reset();

      this.dialog.open(AlertInformationDialogComponent, {
        width: '500px',
        data: {
          title: this.data ? 'Assign Case' : '',
          type: 'success',
          content: this.data ? `Case is assigned.` : ``
        } as IDialogData,
        disableClose: true,
      });
    }
    this.getDepartmentIdFromFormData = formData.agentDepartment;
    console.log(this.getDepartmentIdFromFormData);
    return;
  }

  fetchManagers() {
    this.managerStore.getManagers().subscribe((res: any) => {
      this.arrManagers = res;
    });
  }

  fetchCases() {
    this.caseStore.getAllCases().subscribe((res: any) => {
      this.arrCases = res;
    });
  }

  fetchAgentsDepartment() {
    this.agentDepartmentStore.getAgentDepartments().subscribe((res: any) => {
      this.arrAgentDepartments = res;
    });
  }

  agentsBySelectedDepartment: Array<any> = [];
  async selectDepartmentChanged(event) {
    const id = event.target.value;
    const agents = await this.agentStore.getAgentsByDepartment(id);
    this.agentsBySelectedDepartment = agents as Array<any>;
  }

  fetchStatuses() {
    this.statusStore.getStatuses().subscribe((res: any) => {
      this.arrStatuses = res;
    })
  }

  fetchPriorities() {
    this.priorityStore.getPriorities().subscribe((res: any) => {
      this.arrPriorities = res;
    })
  }

}
