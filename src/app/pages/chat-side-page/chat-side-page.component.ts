import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogsService } from 'src/app/services/dialogs.service';

@Component({
  selector: 'app-chat-side-page',
  templateUrl: './chat-side-page.component.html',
  styleUrls: ['./chat-side-page.component.scss']
})
export class ChatSidePageComponent implements OnInit {

  public Items;
  public selectedItems;

  public selectedList;
  panelOpenState = false;
  public selectedChoices;

  menuLists = ['Post', 'Poll']

  choices = [''];

  constructor(public router: Router, public dialog: MatDialog, public dialogService: DialogsService) {
    // this.Items = [
    //   {name: 'All Closed Cases'},
    //   {name: 'All Open Cases'},
    //   {name: 'My Cases'},
    //   {name: 'Recently Viewed Cases'},
    // ];
  }

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

  openMenuList(menuList:any) {
    this.selectedList = menuList;
  }

  // openButtonToggle(btnIcon:any){
  //   this.selectedBtnToggle = btnIcon;
  // }

  onSendTo() {
    this.dialogService.openSendToDialog();
  }

  onClickAdd(addnewchoice) {
    this.choices.push(addnewchoice);
    console.log(this.choices)
  }


  ngOnInit(): void {
    this.selectedList = this.menuLists[0];
  }
}
