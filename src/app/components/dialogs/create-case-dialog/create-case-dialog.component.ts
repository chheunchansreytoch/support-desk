import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-create-case-dialog',
  templateUrl: './create-case-dialog.component.html',
  styleUrls: ['./create-case-dialog.component.scss']
})
export class CreateCaseDialogComponent implements OnInit {

  registrationForm: FormGroup;
  arrAgentDepartments: Array<any> = [];
  arrAgentsByDepartments: Array<any> = [];
  arrStatuses: Array<any> = [];
  arrPriorities: Array<any> = [];
  arrManagers: Array<any> = [];
  arrCases: Array<any> = [];
  //arrSortCases: Array<any> = [];

  sortCase: any;

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
    public dialogRef: MatDialogRef<CreateCaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.registrationForm = formBuilder.group({
      // caseNumber: new FormControl(data?.caseNumber ?? '', Validators.required),
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

      this.registrationForm.controls['agent'].setValue(this.data?.agent?.id)
    }
  }

  async formSubmitted(formData: any) {
    //console.log(formData.agentDepartment);
    if(this.registrationForm.valid) {
      const { status, priority, agent } = formData;
      await this.fetchSortCase();
      if(this.sortCase.caseNumber){
        console.log("==",this.sortCase.caseNumber);

        let lastStrDigit:string=this.sortCase.caseNumber.slice(-1);
        console.log('a', lastStrDigit);

        let lastDigit=parseInt(lastStrDigit)+1;
        console.log('b', lastDigit);

        this.sortCase.caseNumber = this.sortCase.caseNumber.slice(0, -1) + lastDigit;
        console.log('c', this.sortCase.caseNumber.slice(0, -1));


      }
      if(!this.data) {
        const finalData = {
          ...formData,
          caseNumber: this.sortCase.caseNumber?this.sortCase.caseNumber:"00001",
          createdBy: this.managerStore.getCurrentUser.id,
          status: { id: status },
          priority: { id: priority },
          agent: {id: agent},

        };

        this.caseStore.addCase(finalData).subscribe((res: {}) => {
          this.arrManagers.push(finalData);
          this.registrationForm.reset();
          this.fetchCases();
        });
      } else {
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

      this.registrationForm.enable();
      this.registrationForm.reset();

      this.dialog.open(AlertInformationDialogComponent, {
        width: '500px',
        data: {
          title: this.data ? 'Update Case' : 'Create Case',
          type: 'success',
          content: this.data ? `Case is updated.` : `Case is created.`
        } as IDialogData,
        disableClose: true,
      });
    }
    this.getDepartmentIdFromFormData = formData.agentDepartment;
    console.log(this.getDepartmentIdFromFormData);
    return;
  }

  onCreateNumber() {
    const counter = '0000'+1;
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

  async fetchSortCase() {

      this.sortCase = await this.caseStore.getSortCase();


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
