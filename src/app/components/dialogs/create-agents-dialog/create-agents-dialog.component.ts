import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/typeScripts/agent_gender';

@Component({
  selector: 'app-create-agents-dialog',
  templateUrl: './create-agents-dialog.component.html',
  styleUrls: ['./create-agents-dialog.component.scss']
})
export class CreateAgentsDialogComponent implements OnInit {

  constructor() { }

  SelectGender: string = '';
  genders: Gender[] = [
    {gender: 'Male'},
    {gender: 'Female'},
  ];

  radioChangeHandler (e:any) {
    this.SelectGender = e.target.value;
  }

  ngOnInit(): void {
  }

}
