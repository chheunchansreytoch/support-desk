import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogsService } from 'src/app/services/dialogs.service';
import { ChatStore } from 'src/app/stores/chat.store';

@Component({
  selector: 'app-chat-side-page',
  templateUrl: './chat-side-page.component.html',
  styleUrls: ['./chat-side-page.component.scss']
})
export class ChatSidePageComponent implements OnInit {

  @Input() customer;
  public Items;
  public selectedItems;

  public selectedList;
  public selectedChoices;
  panelOpenState = false;
  messageForm!: FormGroup;

  menuLists = ['Post', 'Poll']
  choices = [''];

  constructor(
    public chatStore: ChatStore,
    public router: Router,
    public dialog: MatDialog,
    public dialogService: DialogsService,
    private fb: FormBuilder,
  ) {
    this.messageForm = this.fb.group({
      messageText: [null, [Validators.required]],
    });
  }

  sendEmail() {
    let messageText = this.messageForm.value.messageText;
    console.log(this.customer);
    let reqObj = {
      messageText: messageText,
      customer: this.customer,
      agent: 'dfca0309-bd1e-47b8-93fb-5b4ec3c5243f'
    }
    this.chatStore.sendEmailMessage(reqObj).then(data => {
      console.log(data);
    })
  }



  ngOnInit(): void {
    this.selectedList = this.menuLists[0];
  }

  openMenuList(menuList:any) {
    this.selectedList = menuList;
  }

  onClickAdd(addnewchoice) {
    this.choices.push(addnewchoice);
    console.log(this.choices)
  }

  onSubmit(formData: any) {
    if (this.messageForm.valid) {
      const finalData = {
        formData
      };

      this.chatStore.sendEmailMessage(finalData);
      console.log('my message: ', finalData);
    }
  }
}
