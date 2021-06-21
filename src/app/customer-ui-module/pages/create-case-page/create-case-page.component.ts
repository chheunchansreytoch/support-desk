import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-case-page',
  templateUrl: './create-case-page.component.html',
  styleUrls: ['./create-case-page.component.scss'],
})
export class CreateCasePageComponent implements OnInit {
  editorForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.editorForm = new FormGroup({ editor: new FormControl(null) });
  }
  onSubmit() {
    console.log('hello');
  }
}
