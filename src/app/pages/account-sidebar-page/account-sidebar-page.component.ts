import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-sidebar-page',
  templateUrl: './account-sidebar-page.component.html',
  styleUrls: ['./account-sidebar-page.component.scss']
})
export class AccountSidebarPageComponent implements OnInit {

  values = [
    {n: '1', accountName: 'SM Entertainment', phone: '086 262 408'},
    {n: '2', accountName: 'SM Entertainment', phone: '086 262 408'},
    {n: '3', accountName: 'SM Entertainment', phone: '086 262 408'},
    {n: '4', accountName: 'SM Entertainment', phone: '086 262 408'},
    {n: '5', accountName: 'SM Entertainment', phone: '086 262 408'},
    {n: '6', accountName: 'SM Entertainment', phone: '086 262 408'},
    {n: '7', accountName: 'SM Entertainment', phone: '086 262 408'},
    {n: '8', accountName: 'SM Entertainment', phone: '086 262 408'},
    {n: '9', accountName: 'SM Entertainment', phone: '086 262 408'},
    {n: '10', accountName: 'SM Entertainment', phone: '086 262 408'},
    {n: '11', accountName: 'SM Entertainment', phone: '086 262 408'},
    {n: '12', accountName: 'SM Entertainment', phone: '086 262 408'},
    {n: '13', accountName: 'SM Entertainment', phone: '086 262 408'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
