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

@Component({
  selector: 'app-all-closed-cases-page',
  templateUrl: './all-closed-cases-page.component.html',
  styleUrls: ['./all-closed-cases-page.component.scss']
})
export class AllClosedCasesPageComponent implements OnInit {

  currentRoute: string = '';
  selectedOption = '3';
  //arrCases: Array<any> = [];
  arrClosedCase: Array<any> = [];

  constructor(
    public router: Router,
    private location: Location,
    private caseStore: CaseStore,
    private dialog: MatDialog,

  ) {}

  ngOnInit(): void {
    this.fetchClosedCases();
  }

  onSelectedItem(item) {
    this.caseStore.getClosedCase(item.id).then((res: any) => {
      this.arrClosedCase = res;
      //console.log(this.arrClosedCase);
    });

    this.router.navigate(
      [{outlets: { primary: '/cases/case-details/' + item?.id, child2: '/cases/case-details/' + item?.id}}],
      { queryParams: { key: item?.key } }
    )
  }

  fetchClosedCases() {
    this.caseStore.getClosedCases().subscribe((res: any) => {
      this.arrClosedCase = res;
      //console.log('cases:', this.arrCases);
    });
  }

  onClickDeleteCase(caseId) {
    if (caseId) {
      const dialogRef = this.dialog.open(AgentDeleteCaseDialogComponent, {
        data: caseId,
        width: '40vw',
        height: '40vh',
        role: 'dialog',
      });

      dialogRef.afterClosed().subscribe(async (result: any) => {
        if(!result) return;
        await this.caseStore.deleteCase(result).then((res: any) => {
          this.fetchClosedCases()
         //console.log();

        });
        //console.log(result);
        alert("Delete Successfully!");
      });
    }
    return;
  }

  onClickEdit(caseId) {
    const dialogRef = this.dialog.open(AgentUpdateDialogComponent, {
      data: caseId,
      width: '600px',
      height: '96vh',
      role: 'dialog',
    });
    dialogRef.updatePosition({ top: '2vh', right: '2vh' });
    dialogRef.afterClosed().subscribe(() => {
      this.fetchClosedCases();
    })
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

  convertUTCtoDate(UTC: string) {
    const date = new Date(UTC);
    //const strDate = date.toLocaleDateString();
    const strDate = date.toLocaleDateString() + '\n' + date.toLocaleTimeString();
    return strDate;
  }
}
