import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DialogsService } from 'src/app/services/dialogs.service';
import { ContactNewEvents } from 'src/app/typeScripts/contact_newevents';
import { AccountNewEvents } from 'src/app/typeScripts/account_newevent';
import { OwnerContactNewEvents } from 'src/app/typeScripts/owner-newEvent';


@Component({
  selector: 'app-account-chatter-page',
  templateUrl: './account-chatter-page.component.html',
  styleUrls: ['./account-chatter-page.component.scss']
})
export class AccountChatterPageComponent implements OnInit {
  selectedOption = '1';
  public selectedList;
  panelOpenState = false;
  public selectedChoices;
  public selectedActivityList;
  contactImageSrc = './assets/images/selection-icons/contacts.png';
  accountImageSrc = './assets/images/selection-icons/account.png';
  ownerContactImgSrc = './assets/images/selection-icons/contact-owner.png';


  minDate:any = " ";
  // currentDate =
  public startDate;
  public endDate;
  public startTime;
  public endTime;

  //currentDate = moment("2021-09-16T10:00:00").format('DD-MMM-YYYY');
  currentDate = new Date();
  public items;
  //public optionContacts;

  menuLists = ['Post', 'Poll', 'Question'];

  activityLists = ['New Task', 'New Event', 'Log a Call', 'Email'];

  choices = [''];

  optionSubjects = ['Call', ' Email', 'Send Letter', 'Send Quote', 'Others'];
  // optionContacts = ['Park Haram', 'Chheun Chansreytoch', 'Hello Kitty'];


  constructor( public dialogService: DialogsService){};

  optionContacts: ContactNewEvents [] = [
    {image: this.contactImageSrc, name: 'Park Haram'},
    {image: this.contactImageSrc, name: 'Park Chanyeol'},
    {image: this.contactImageSrc, name: 'Jay Jay'},
    {image: this.contactImageSrc, name: 'Jung Jayhyun'},
    {image: this.contactImageSrc, name: 'Park Seunghoon'},
  ];

  optionAccounts: AccountNewEvents [] = [
    {image: this.accountImageSrc, name: 'Park Haram'},
    {image: this.accountImageSrc, name: 'Park Chanyeol'},
    {image: this.accountImageSrc, name: 'Jay Jay'},
    {image: this.accountImageSrc, name: 'Jung Jayhyun'},
    {image: this.accountImageSrc, name: 'Park Seunghoon'},
  ];

  optionOwnerContacts: OwnerContactNewEvents [] = [
    {image: this.ownerContactImgSrc, name: 'Park Haram'},
    {image: this.ownerContactImgSrc, name: 'Park Chanyeol'},
    {image: this.ownerContactImgSrc, name: 'Jay Jay'},
    {image: this.ownerContactImgSrc, name: 'Jung Jayhyun'},
    {image: this.ownerContactImgSrc, name: 'Park Seunghoon'},
  ]



  openMenuList(menuList:any) {
    this.selectedList = menuList;
  }

  openActivityList(activityList:any) {
    this.selectedActivityList = activityList;
  }

  onSendTo() {
    this.dialogService.openSendToDialog();
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
    // var convertStartDate = this.startDate.toLocaleString('en-us', { month: 'short' });
    // console.log(convertStartDate);
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

  // getDateTime() {
  //   var currentDateTime = moment("2021-09-16T10:00:00").format('DD-MMM-YYYY');
  //   console.log(currentDateTime);
  // }

  ngOnInit(): void {
    this.selectedList = this.menuLists[0];
    this.selectedActivityList = this.activityLists[0];

    this.getDate();

    // this.getDateTime();

  }
}
