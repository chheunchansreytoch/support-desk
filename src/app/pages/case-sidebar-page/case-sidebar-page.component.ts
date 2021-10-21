import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-case-sidebar-page',
  templateUrl: './case-sidebar-page.component.html',
  styleUrls: ['./case-sidebar-page.component.scss']
})
export class CaseSidebarPageComponent implements OnInit {
  public Items;
  public selectedItems;

  // constructor(public router: Router) {
  //   this.Items = [
  //     {name: 'All Closed Cases'},
  //     {name: 'All Open Cases'},
  //     {name: 'My Cases'},
  //     {name: 'Recently Viewed Cases'},
  //   ];
  // }

  // onSelectedOption(event: any) {
  //   this.selectedItems = event.target.value;
  //   const value = this.selectedItems;

  //   const allClosedCases = 'All Closed Cases';

  //   if (value == allClosedCases) {
  //     this.router.navigate(['/cases/agent-all-closed-cases']);
  //   }
  //   else if (value == 'All Open Cases') {
  //     this.router.navigate(['/cases/agent-all-open-cases']);
  //   }

  //   else if (value == 'My Cases') {
  //     this.router.navigate(['/cases/agent-my-cases']);
  //   }

  //   else if (value == 'Recently Viewed Cases'){
  //     console.log('review case works');
  //   }
  // }

  values = [
    {n: '1', caseNumber: '00010001', subject: 'Dialogs issue with text and form', accountName: 'Stella Pavlova', status: 'New'},
    {n: '2', caseNumber: '00010012', subject: 'Dialogs issue with text and form', accountName: 'Stella Pavlova', status: 'New'},
    {n: '3', caseNumber: '00010021', subject: 'Dialogs issue with text and form', accountName: 'Stella Pavlova', status: 'New'},
    {n: '4', caseNumber: '00010011', subject: 'Dialogs issue with text and form', accountName: 'Stella Pavlova', status: 'New'},
    {n: '5', caseNumber: '00010031', subject: 'Dialogs issue with text and form', accountName: 'Stella Pavlova', status: 'New'},
    {n: '6', caseNumber: '00010001', subject: 'Dialogs issue with text and form', accountName: 'Stella Pavlova', status: 'New'},
    {n: '7', caseNumber: '00010012', subject: 'Dialogs issue with text and form', accountName: 'Stella Pavlova', status: 'New'},
    {n: '8', caseNumber: '00010021', subject: 'Dialogs issue with text and form', accountName: 'Stella Pavlova', status: 'New'},
    {n: '9', caseNumber: '00010011', subject: 'Dialogs issue with text and form', accountName: 'Stella Pavlova', status: 'New'},
    {n: '10', caseNumber: '00010031', subject: 'Dialogs issue with text and form', accountName: 'Stella Pavlova', status: 'New'},
    {n: '11', caseNumber: '00010021', subject: 'Dialogs issue with text and form', accountName: 'Stella Pavlova', status: 'New'},
    {n: '12', caseNumber: '00010011', subject: 'Dialogs issue with text and form', accountName: 'Stella Pavlova', status: 'New'},
    {n: '13', caseNumber: '00010031', subject: 'Dialogs issue with text and form', accountName: 'Stella Pavlova', status: 'New'},
  ]

  //select checkbox
  // checks=false;
  // checkAll(e:any) {
  //   if(e.target.checked==true) {
  //     this.checks=true;
  //   }
  //   else {
  //     this.checks=false;
  //   }
  // }


  ngOnInit(): void {
  }

}
