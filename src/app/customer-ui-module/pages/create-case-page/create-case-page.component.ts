import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-case-page',
  templateUrl: './create-case-page.component.html',
  styleUrls: ['./create-case-page.component.scss'],
})
export class CreateCasePageComponent implements OnInit {
  descriptionForm!: FormGroup;
  descriptionStyle = {
    height: '300px',
  };

  constructor() {}

  ngOnInit(): void {
    this.descriptionForm = new FormGroup({
      description: new FormControl(null),
    });
  }
  onSubmit() {
    console.log(this.descriptionForm.get('description')?.value);
  }
}
