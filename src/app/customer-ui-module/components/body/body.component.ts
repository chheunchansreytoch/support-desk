import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/customer-ui-module/dummy/app';

@Component({
  selector: 'app-customer-ui-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  constructor() {}
  dummy = DATA;

  ngOnInit(): void {}
}
