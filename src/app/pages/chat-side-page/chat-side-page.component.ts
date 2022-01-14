import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  public selectedChoices;
  panelOpenState = false;
  //editorForm!: FormGroup;

  menuLists = ['Post', 'Poll']
  choices = [''];

  constructor(
    public router: Router,
    public dialog: MatDialog,
    public dialogService: DialogsService,
    private formGroupBuilder: FormBuilder,
    )
  { }

  ngOnInit(): void {
    this.selectedList = this.menuLists[0];
    console.log("child2")
  }

  openMenuList(menuList:any) {
    this.selectedList = menuList;
  }

  onSendTo() {
  }

  onClickAdd(addnewchoice) {
    this.choices.push(addnewchoice);
    console.log(this.choices)
  }
}
