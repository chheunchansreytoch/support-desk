import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ManagerStore } from 'src/app/stores/manager.store';

@Component({
  selector: 'app-manager-login-page',
  templateUrl: './manager-login-page.component.html',
  styleUrls: ['./manager-login-page.component.scss']
})
export class ManagerLoginPageComponent implements OnInit {

  loginForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private managerStore: ManagerStore,
  ) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {

  }

  formSubmited(formData: any) {
    const { username, email, password } = formData;
    this.managerStore.login(username, email, password);
    console.log(this.loginForm.value);
  }
}
