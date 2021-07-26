import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  items = [
    {
      n: "1",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      action: "",
    },
    {
      n: "2",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },
    {
      n: "3",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },
    {
      n: "4",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },
    {
      n: "5",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },
    {
      n: "6",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    },
    {
      n: "7",
      agentName: "Chheun Chansreytoch",
      jobPosition: "Developer",
      status: "Working",
      agentInfo: "",
      Action: "",
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
