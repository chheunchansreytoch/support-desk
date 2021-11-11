import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ManagerStore } from 'src/app/stores/manager.store';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private managerStore: ManagerStore
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
  }

  formSubmited(formData: any) {
    const { email, password } = formData;
    this.managerStore.login(email, password);
  }

}
