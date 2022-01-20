import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      id: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {

  }

  formSubmited() {
    const {email, password } = this.loginForm.value;
    this.agentStore.login(email, password);
    this.router.navigate(['/cases'], { queryParams: { key: this.agentStore.getCurrentAgentUser.id }}).then(() => {

    });
  }
}
