import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-dialog',
  templateUrl: './view-all-dialog.component.html',
  styleUrls: ['./view-all-dialog.component.scss']
})
export class ViewAllDialogComponent implements OnInit {

  rows = [
    {
      n: "1",
      all: "",
      contactName: "Chheun Chansreytoch",
      title: "SVP, Procurement",
      email: "chheunchansreytoch@gmail.com",
      phone: "(512) 757-6000",
      option: "",
    },

    {
      n: "2",
      all: "",
      contactName: "Chheun Chansreytoch",
      title: "SVP, Procurement",
      email: "chheunchansreytoch@gmail.com",
      phone: "(512) 757-6000",
      option: "",
    },

    {
      n: "3",
      all: "",
      contactName: "Chheun Chansreytoch",
      title: "SVP, Procurement",
      email: "chheunchansreytoch@gmail.com",
      phone: "(512) 757-6000",
      option: "",
    },

    {
      n: "4",
      all: "",
      contactName: "Chheun Chansreytoch",
      title: "SVP, Procurement",
      email: "chheunchansreytoch@gmail.com",
      phone: "(512) 757-6000",
      option: "",
    },

    {
      n: "5",
      all: "",
      contactName: "Chheun Chansreytoch",
      title: "SVP, Procurement",
      email: "chheunchansreytoch@gmail.com",
      phone: "(512) 757-6000",
      option: "",
    },

    {
      n: "6",
      all: "",
      contactName: "Chheun Chansreytoch",
      title: "SVP, Procurement",
      email: "chheunchansreytoch@gmail.com",
      phone: "(512) 757-6000",
      option: "",
    },
  ]


  constructor() { }

  ngOnInit(): void {
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

}
