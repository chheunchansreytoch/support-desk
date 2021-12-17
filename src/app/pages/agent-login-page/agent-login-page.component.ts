import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AgentStore } from 'src/app/stores/agent.store';

@Component({
  selector: 'app-agent-login-page',
  templateUrl: './agent-login-page.component.html',
  styleUrls: ['./agent-login-page.component.scss']
})
export class AgentLoginPageComponent implements OnInit {

  loginForm: any;


  constructor(
    private formBuilder: FormBuilder,
    private agentStore: AgentStore,
  ) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
    // const control = new FormControl('Nancy');
  }

  formSubmited(formData: any) {
    const { username, email, password } = formData;
    this.agentStore.login(username, email, password);
    console.log(this.loginForm.value);
  }
}

// export function ConfirmedValidator(controlName: string, matchingControlName: string){
//   return (formGroup: FormGroup) => {
//     const control = formGroup.controls[controlName];
//     const matchingControl = formGroup.controls[matchingControlName];

//     if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
//       return;
//     }

//     if (control.value !== matchingControl.value) {
//       matchingControl.setErrors({ confirmedValidator: true });
//     } else {
//       matchingControl.setErrors(null);
//     }
//   }
// }
