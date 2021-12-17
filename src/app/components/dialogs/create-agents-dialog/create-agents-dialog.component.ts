import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AgentStore } from 'src/app/stores/agent.store';
import { AgentDepartmentStore } from 'src/app/stores/agentDepartment.store';
import { ManagerStore } from 'src/app/stores/manager.store';

@Component({
  selector: 'app-create-agents-dialog',
  templateUrl: './create-agents-dialog.component.html',
  styleUrls: ['./create-agents-dialog.component.scss']
})
export class CreateAgentsDialogComponent implements OnInit {

  SelectGender: string = '';
  registrationForm: any;
  arrAgents: Array<any> = [];
  arrAgentDepartments: Array<any> = [];
  arrManagers: Array<any> = [];
  // public genders = Genders;

  //selectedDepartmentDefault = this.arrAgentDepartments[0];

  genders= ['Male', 'Female'];

  constructor(
    private agentDepartmentStore: AgentDepartmentStore,
    private agentStore: AgentStore,
    private managerStore: ManagerStore,
    private formBuilder: FormBuilder,
  ) { this.registrationForm = formBuilder.group({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    department: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
  }, {
    validators: ConfirmedValidator('password', 'confirmPassword')
  }) }

  fetchAgentDepartments() {
    this.agentDepartmentStore.getAgentDepartments().subscribe((res: any) => {
      this.arrAgentDepartments = res;
      console.log(this.arrAgentDepartments);
    });
  }

  // fetchManager() {
  //   this.managerStore.getManagers().subscribe((res: any) => {
  //     this.arrManagers = res;
  //   });
  // }

  btnSubmitClicked() { };

  formSubmitted(formData: any) {
    if (this.registrationForm.valid) {
      const { department, gender } = formData;
      const finalData = {
        ...formData,
        createdBy: this.managerStore.getCurrentUser.id,
        department: { id: department },
        gender: gender,
      };

      this.agentStore.addAgent(finalData).subscribe((res: {}) => {
        this.arrAgents.push(finalData);
        this.registrationForm.reset();
      });

      alert("Agent was Created");
    }

    return;
  }


  radioChangeHandler (e:any) {
    this.SelectGender = e.target.value;
    console.log(this.SelectGender);
  }

  ngOnInit(): void {
    this.fetchAgentDepartments();
  }
}

export function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}


// export enum Genders {
//   Male = 'Male',
//   Female = 'Female'
// }



