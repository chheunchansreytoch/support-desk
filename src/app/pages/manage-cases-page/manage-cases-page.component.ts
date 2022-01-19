import { Component, OnInit } from '@angular/core';
import { Department_IT } from 'src/app/typeScripts/department_IT';
import { Department_Accounting } from 'src/app/typeScripts/department_accounting';
import { Department_Payroll } from 'src/app/typeScripts/department_payroll';
import { DialogsService } from 'src/app/services/dialogs.service';
import { MatDialog } from '@angular/material/dialog';
import { CaseStore } from 'src/app/stores/case.store';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StatusStore } from 'src/app/stores/status.store';
import { PriorityStore } from 'src/app/stores/priority.store';
import { ManagerStore } from 'src/app/stores/manager.store';
import { AgentStore } from 'src/app/stores/agent.store';
import { AgentDepartmentStore } from 'src/app/stores/agentDepartment.store';
import { DialogDeleteComponent } from 'src/app/components/dialogs/crud-manageCase-page/dialog-delete/dialog-delete.component';
import { DialogUpdateComponent } from 'src/app/components/dialogs/crud-manageCase-page/dialog-update/dialog-update.component';
import { IDialogData } from 'src/app/models/IDialog.model';
import { AlertInformationDialogComponent } from 'src/app/components/alert-information-dialog/alert-information-dialog.component';
import { PaginationStore } from 'src/app/stores/pagination.store';
import { CreateCaseDialogComponent } from 'src/app/components/dialogs/create-case-dialog/create-case-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { AssignCaseDialogComponent } from 'src/app/components/dialogs/assign-case-dialog/assign-case-dialog.component';

@Component({
  selector: 'app-manage-cases-page',
  templateUrl: './manage-cases-page.component.html',
  styleUrls: ['./manage-cases-page.component.scss']
})
export class ManageCasesPageComponent implements OnInit {

  public selectedCheckedboxValue;
  selectedValue = 'none';
  public selecedBtnCancel;
  private departmentIT_statusValue;
  arrCases: Array<any> = [];
  arrAgents: Array<any> = [];
  arrAgentDepartment: Array<any> = [];
  arrAgentsByDepartment: Array<any> = [];
  arrStatuses: Array<any> = [];
  arrPriorities: Array<any> = [];
  arrManagers: Array<any> = [];
  arrList: Array<any> = [];
  creatingCaseForm: any;

  getDepartmentIdFromFormData= '';

  constructor(
    public dialog: MatDialog,
    public dialogService: DialogsService,
    private caseStore: CaseStore,
    public agentStore: AgentStore,
    private agentDepartmentStore: AgentDepartmentStore,
    private statusStore: StatusStore,
    private priorityStore: PriorityStore,
    private managerStore: ManagerStore,
    private formBuilder: FormBuilder,
    public paginationStore: PaginationStore,
  )
  {

    this.creatingCaseForm = formBuilder.group({
      caseNumber: new FormControl('', Validators.required),
      status: new FormControl('New', Validators.required),
      priority: new FormControl('High', Validators.required),
      agentDepartment: new FormControl('', Validators.required),
      agent:  new  FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    },
    {
    });
  }

  ngOnInit(): void {
    this.fetchCases();
    this.fetchStatuses();
    this.fetchPriorities();
    this.fetchManagers();
    this.fetchAgentsDepartment();
    this.fetchAgentsByDepartment();

    const obj = document.getElementById("animatedNumber0");
    this.animateValue(obj, 0, 260, 2000);
  }

  animateValue(obj, start, end, duration) {
    let startTimestamp = null || 0;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }


  fetchCases() {
    this.caseStore.getCases().subscribe((res: any) => {
      this.arrCases = res;
    });
  }

  fetchAgentsDepartment() {
    this.agentDepartmentStore.getAgentDepartments().subscribe((res: any) => {
      this.arrAgentDepartment = res;
    });
  }

  fetchAgentsByDepartment() {
    this.agentStore.getAgentsByDepartment(this.getDepartmentIdFromFormData).then((res: any) => {
      this.arrAgentsByDepartment = res;
    });
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

  fetchManagers() {
    this.managerStore.getManagers().subscribe((res: any) => {
      this.arrManagers = res;
    });
  }

  agentsBySelectedDepartment: Array<any> = [];
  async selectDepartmentChanged(event) {
    const id = event.target.value;
    const agents = await this.agentStore.getAgentsByDepartment(id);
    this.agentsBySelectedDepartment = agents as Array<any>;
  }

  btnSubmitClicked() { };

  formSubmitted(formData: any) {
    //console.log(formData.agentDepartment);
    if(this.creatingCaseForm.valid) {
      const { status, priority, agent } = formData;
      console.log(formData);
      const finalData = {
        ...formData,
        createdBy: this.managerStore.getCurrentUser.id,
        status: { id: status },
        priority: { id: priority },
        agent: {id: agent},
      };

      this.caseStore.addCase(finalData).subscribe((res: {}) => {
        // console.log(res);
        this.arrManagers.push(finalData);
        this.creatingCaseForm.reset();
        this.fetchCases();
        this.createCasetoogleTag();
        alert("Case was created successfully!");
      });
    }
    this.getDepartmentIdFromFormData = formData.agentDepartment;
    console.log(this.getDepartmentIdFromFormData);

    return;
  }

  onCreate(item: any) {
    const dialogRef = this.dialog.open(CreateCaseDialogComponent, {
      width: '600px',
      height: '96vh',
      data: item

    });

    dialogRef.updatePosition({ top: '2vh', right: '2vh' });
    dialogRef.afterClosed().subscribe(() => {
      this.fetchCases();
    })
  }

  onAssign(item: any) {
    //console.log(item);
    const dialogRef = this.dialog.open(AssignCaseDialogComponent, {
      width: '600px',
      height: '96vh',
      data: item
    });

    dialogRef.updatePosition({ top: '2vh', right: '2vh' });
    dialogRef.afterClosed().subscribe(() => {
      this.fetchCases();
    })
  }

  onMoreDetailDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: {
        title: 'Delete Case',
        type: 'question',
        content: 'Are you sure that you want to delete this selected case?'
      } as IDialogData,
      disableClose: true,
    });
  }

  onSelectedAgent(caseId) {
    if(caseId) {
      const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
        width: '500px',
        data: {
          title: 'Delete Case',
          type: 'question',
          content: 'Are you sure that you want to delete this selected case?'
        } as IDialogData,
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe(async (result: any) => {
        if(!result || result === 'no') return;
        await this.caseStore.deleteCase(caseId);

        this.dialog.open(AlertInformationDialogComponent, {
          width: '500px',
          data: {
            title: 'Delete Case',
            type: 'success',
            content: `Case is deleted.`
          } as IDialogData,
          disableClose: true,
        });

        //this.paginationStore.getAgentsWithPagination(10, 0, '');
      });
    }
    return;
  }


  //createCasetoogleTag
  showCasePopup:boolean=false
  createCasetoogleTag() {
    this.showCasePopup=!this.showCasePopup;
  }

  //assignCasetoogleTag
  showAssignPopup:boolean=false
  assignCasetoogleTag() {
    this.showAssignPopup=!this.showAssignPopup;
    //this.createCasetoogleTag();
  }

  //department button
  showdepartmentBtn:boolean=false
  departmentBtn() {
    this.showdepartmentBtn=!this.showdepartmentBtn
  }

  onClickDelete(caseId) {
    if (caseId) {
      const dialogRef = this.dialog.open(DialogDeleteComponent, {
        width: '500px',
        data: {
          title: 'Delete Case',
          type: 'question',
          content: 'Are you sure that you want to delete this selected case?'
        } as IDialogData,
        disableClose: true,
      });

      dialogRef.afterClosed().subscribe(async (result: any) => {
        if(!result || result === 'no') return;
        await this.caseStore.deleteCase(caseId).then((res: any) => {
          this.fetchCases();
        });

        this.dialog.open(AlertInformationDialogComponent, {
          width: '500px',
          data: {
            title: 'Delete Case',
            type: 'success',
            content: `Case is deleted.`
          } as IDialogData,
          disableClose: true,
        });

       // this.paginationStore.getCasesWithPagination(10, 0, '');
      });
    }
    return;
  }

  convertUTCtoDate(UTC: string) {
    const date = new Date(UTC);
    //const strDate = date.toLocaleDateString();
    const strDate = date.toLocaleDateString();
    return strDate;
  }

// checkbox table
  checks=false;
  checkAll(e: any) {
    if(e.target.checked==true) {
      this.checks=true;
    }
    else {
      this.checks=false;
    }
  }

  // checkToAssign list
  // Checked=false;
  isChecked(item, e:any){
    if(e.target.checked==true) {
        return this.arrList = item;
    }
    else {
      return null;
    }
  }
}
