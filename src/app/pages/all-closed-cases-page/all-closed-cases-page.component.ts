import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { CaseStore } from 'src/app/stores/case.store';
import { Router } from '@angular/router';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import * as moment from 'moment';
import { ConfirmDeleteDialogComponent } from 'src/app/components/dialogs/confirm-delete-dialog/confirm-delete-dialog.component';
import { DialogsService } from 'src/app/services/dialogs.service';
import { MatDialog } from '@angular/material/dialog';
import { AgentDeleteCaseDialogComponent } from 'src/app/components/dialogs/agent-delete-case-dialog/agent-delete-case-dialog.component';
import { AgentUpdateDialogComponent } from 'src/app/components/dialogs/agent-update-dialog/agent-update-dialog.component';
import { ArrayDataSource } from '@angular/cdk/collections';
import { CaseUpdateDialogComponent } from 'src/app/components/dialogs/case-update-dialog/case-update-dialog.component';
import { IDialogData } from 'src/app/models/IDialog.model';
import { AlertInformationDialogComponent } from 'src/app/components/alert-information-dialog/alert-information-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-all-closed-cases-page',
  templateUrl: './all-closed-cases-page.component.html',
  styleUrls: ['./all-closed-cases-page.component.scss']
})
export class AllClosedCasesPageComponent implements OnInit {

  currentRoute: string = '';
  selectedOption = '3';
  public selectedKey;
  public selectedCheckedboxValue;
  public selectedCheckedboxId;

  arrClosedCases: Array<any> = [];

  constructor(
    public router: Router,
    private location: Location,
    private caseStore: CaseStore,
    private dialog: MatDialog,

  ) {}

  ngOnInit(): void {
    this.fetchAllClosedCases();
  }

  onSelectedItem($event:MouseEvent , item,index) {

   const checkboxElement = document.getElementById("checkbox"+index);
   if(checkboxElement===$event.target) return;
  this.router.navigate(['/cases/case-details'], {queryParams: { key: item?.id }});
  }

  fetchAllClosedCases() {
    try {
      this.selectedKey = localStorage.getItem('department_id');
      let agent_id = JSON.parse(localStorage.getItem('agent_auth') || '{}');
      this.caseStore
        .getAllClosedCases(this.selectedKey, agent_id.id)
        ?.then((res: any) => {
          this.arrClosedCases = res;
        });
    } catch (e) {
      console.log(e);
    }
  }

  onClickUpdate(caseId) {
 //console.log(item);
    const dialogRef = this.dialog.open(CaseUpdateDialogComponent, {
      width: '600px',
      height: '96vh',
      data: caseId
    });

    dialogRef.updatePosition({ top: '2vh', right: '2vh' });
    dialogRef.afterClosed().subscribe(() => {
      this.fetchAllClosedCases();
    });
  }

  onClickDelete(caseId) {
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
        await this.caseStore.deleteCase(caseId).then(()=> {
          this.fetchAllClosedCases();
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

        //this.paginationStore.getAgentsWithPagination(10, 0, '');
      });
    }
    return;
  }

  onClickChangeOwner(caseId) {

  }

//select checkbox
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
  // Checked=false;
  isChecked(item, e:any): void{
    console.log('===', item);

    if(e.target.checked===true) {
        this.selectedCheckedboxValue = item;
        this.selectedCheckedboxId = item.id;
    }
  }

  convertUTCtoDate(UTC: string) {
    const date = new Date(UTC);
    //const strDate = date.toLocaleDateString();
    const strDate = date.toLocaleDateString() + '\n' + date.toLocaleTimeString();
    return strDate;
  }
}
