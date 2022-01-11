import { Component, OnInit } from '@angular/core';
import { DialogsService } from 'src/app/services/dialogs.service';
import { ContactNewEvents } from 'src/app/typeScripts/contact_newevents';
import { AccountNewEvents } from 'src/app/typeScripts/account_newevent';
import { OwnerContactNewEvents } from 'src/app/typeScripts/owner-newEvent';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-chatter-page',
  templateUrl: './contact-chatter-page.component.html',
  styleUrls: ['./contact-chatter-page.component.scss']
})
export class ContactChatterPageComponent implements OnInit {
  public selectedList;
  panelOpenState = false;
  public selectedChoices;
  public selectedActivityList;
  selectedOption = '1';
  imageSrc = './assets/images/selection-icons/contacts.png';

  minDate:any = " ";
  // currentDate =
  public startDate;
  public endDate;
  public startTime;
  public endTime;

  contactImageSrc = './assets/images/selection-icons/contacts.png';
  accountImageSrc = './assets/images/selection-icons/account.png';
  ownerContactImgSrc = './assets/images/selection-icons/contact-owner.png';


  currentDate = new Date();
  editorForm!: FormGroup;

  menuLists = ['Post', 'Poll','Question'];

  activityLists = ['New Task', 'New Event', 'Log a Call', 'Email'];

  choices = [''];
  optionSubjects = ['Call', ' Email', 'Send Letter', 'Send Quote', 'Others'];

  constructor(
    public dialogService: DialogsService
  )
  {}

  ngOnInit(): void {
    this.selectedList = this.menuLists[0];
    this.selectedActivityList = this.activityLists[0];

    this.getDate();

    this.formEmailSubmit();
  }

  formEmailSubmit() {
    this.editorForm = new FormGroup ({
      'editor': new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.editorForm.get('editor')?.value);
  }

  onSendTo() {
    if(!this.editorForm) {
      console.log(this.onSubmit());
    }
    else {
      console.log('null');

    }
    //this.dialogService.openSendToDialog();
  }

  optionContacts: ContactNewEvents [] = [
    {image: this.contactImageSrc, name: 'Park Haram'},
    {image: this.contactImageSrc, name: 'Park Chanyeol'},
    {image: this.contactImageSrc, name: 'Jay Jay'},
    {image: this.contactImageSrc, name: 'Jung Jayhyun'},
    {image: this.contactImageSrc, name: 'Park Seunghoon'},
  ];

  optionAccounts: AccountNewEvents [] = [
    {image: this.imageSrc, name: 'Park Haram'},
    {image: this.imageSrc, name: 'Park Chanyeol'},
    {image: this.imageSrc, name: 'Jay Jay'},
    {image: this.imageSrc, name: 'Jung Jayhyun'},
    {image: this.imageSrc, name: 'Park Seunghoon'},
  ];

  optionOwnerContacts: OwnerContactNewEvents [] = [
    {image: this.ownerContactImgSrc, name: 'Park Haram'},
    {image: this.ownerContactImgSrc, name: 'Park Chanyeol'},
    {image: this.ownerContactImgSrc, name: 'Jay Jay'},
    {image: this.ownerContactImgSrc, name: 'Jung Jayhyun'},
    {image: this.ownerContactImgSrc, name: 'Park Seunghoon'},
  ];

  openMenuList(menuList:any) {
    this.selectedList = menuList;
  }

  openActivityList(activityList:any) {
    this.selectedActivityList = activityList;
  }

  onClickAdd(addnewchoice) {
    this.choices.push(addnewchoice);
    console.log(this.choices)
  }

  getDate() {
    var date:any = new Date();
    var toDate:any = date.getDate();
    if(toDate<10){
      toDate = '0' + toDate;
    }

    //var month:any = date.getMonth() + 1;
    var month:any = date.toLocaleString('en-us', { month: 'short' });
    if(month<10) {
      month = '0' + month;

    }

    var year:any = date.getFullYear();
    this.minDate = year + '-' + month + '-' + toDate;
    console.log(this.minDate);

  }

  onStartDate(e) {
    this.startDate = e.target.value;
    console.log(this.startDate);

  }

  onEndDate(e) {
    this.endDate = e.target.value;
    console.log(this.endDate);
  }

  onStartTime(e) {
    this.startTime = e.target.value;
    console.log(this.startTime);
  }

  onEndTime(e) {
    this.endTime = e.target.value;
    console.log(this.endTime);
  }
}
