import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DATA } from 'src/app/customer-ui-module/dummy/app';

@Component({
  selector: 'app-customer-ui-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  constructor(private router: Router) {}
  dummy = DATA;
  goToDashboard(): void {
    this.router.navigate(['/customer-ui/dashboard']);
  }

  ngOnInit(): void {}
}
