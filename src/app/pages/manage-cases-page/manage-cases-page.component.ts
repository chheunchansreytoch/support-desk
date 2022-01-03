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

@Component({
  selector: 'app-manage-cases-page',
  templateUrl: './manage-cases-page.component.html',
  styleUrls: ['./manage-cases-page.component.scss']
})
export class ManageCasesPageComponent implements OnInit {

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
  creatingCaseForm: any;

  //id= '6d5d9e39-3fd2-4994-8588-f2c151466049';
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
    console.log("jenh ey ot ng?", this.agentStore.getAgentsByDepartment(this.getDepartmentIdFromFormData).then((res: any) => {
      this.arrAgentsByDepartment = res;
    }));

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

  onClickUpdate(caseId) {
    const dialogRef = this.dialog.open(DialogUpdateComponent, {
      data: caseId,
      width: '600px',
      height: '96vh',
      role: 'dialog',
    });

    dialogRef.updatePosition({top: '2vh', right: '2vh'});
    dialogRef.afterClosed().subscribe(() => {
      this.fetchCases();
    })
  }

  // onClickUpdate(caseId) {
  //   if(caseId) {
  //     const dialogRef = this.dialog.open(DialogUpdateComponent, {
  //       data: caseId
  //     });
  //     dialogRef.afterClosed().subscribe(async (result: any) => {
  //       if(!result) return;
  //       await this.caseStore(result);
  //       console.log(result);
  //       alert("The Case was updated successfully!");
  //     });
  //   }
  //   return;
  //}


// *** create select departments ***
  SelectAgentName: string = '';

  departments_IT: Department_IT [] = [
    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Working",
    },

    {
      all: "",
      name: "Chheun Chansreytoch",
      status: "Closed",
    },
  ];

  radioChangeHandler (e:any) {
    this.SelectAgentName = e.target.value;
  }


// checkbox table
  checks=false;
  checkAll(e:any) {
    if(e.target.checked==true) {
      this.checks=true;
    }
    else {
      this.checks=false;
    }
  }

  // checkToAssign list
  Checked=false;
  isChecked(e:any){
    if(e.target.checked==true) {
      this.Checked=true;
    }
    else {
      this.Checked=false;
    }
  }

  ngOnInit(): void {
    this.fetchCases();
    this.fetchStatuses();
    this.fetchPriorities();
    this.fetchManagers();
    this.fetchAgentsDepartment();
    this.fetchAgentsByDepartment();
  }
}
