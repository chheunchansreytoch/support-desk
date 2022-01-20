import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertInformationDialogComponent } from 'src/app/components/alert-information-dialog/alert-information-dialog.component';
import { ConfirmationDialogComponent } from 'src/app/components/confirmation-dialog/confirmation-dialog.component';
import { IDialogData } from 'src/app/models/IDialog.model';
import { CustomerStore } from 'src/app/stores/customer.store';

@Component({
  selector: 'app-manage-customers-page',
  templateUrl: './manage-customers-page.component.html',
  styleUrls: ['./manage-customers-page.component.scss']
})
export class ManageCustomersPageComponent implements OnInit {

  arrCustomers: Array<any> = [];

  constructor(
    private customerStore: CustomerStore,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers() {
    this.customerStore.getCustomers().subscribe((res: any) => {
      this.arrCustomers = res;
    })
  }

  onClickDelete(customerId){
    if(customerId) {
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
        await this.customerStore.deleteCustomer(customerId).then(() => {
          this.fetchCustomers();
        });

        this.dialog.open(AlertInformationDialogComponent, {
          width: '500px',
          data: {
            title: 'Delete Customer',
            type: 'success',
            content: `Customer is deleted.`
          } as IDialogData,
          disableClose: true,
        });

        //this.paginationStore.getAgentsWithPagination(10, 0, '');
      });
    }
  }

}
