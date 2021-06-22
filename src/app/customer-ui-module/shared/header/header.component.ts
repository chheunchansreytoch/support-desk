import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/customer-ui-module/dummy/app';
@Component({
  selector: 'app-customer-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  dummy = DATA;
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  ngOnInit(): void {}
}
