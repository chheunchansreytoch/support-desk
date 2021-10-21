import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-sidebar-page',
  templateUrl: './contact-sidebar-page.component.html',
  styleUrls: ['./contact-sidebar-page.component.scss']
})
export class ContactSidebarPageComponent implements OnInit {

  values = [
    {n: '1', name: 'Park Haram', accountNumber: 'SM Entertainment', title: 'Artist', phone: '086 262 408'},
    {n: '2', name: 'Park Haram', accountNumber: 'SM Entertainment', title: 'Artist', phone: '086 262 408'},
    {n: '3', name: 'Park Haram', accountNumber: 'SM Entertainment', title: 'Artist', phone: '086 262 408'},
    {n: '4', name: 'Park Haram', accountNumber: 'SM Entertainment', title: 'Artist', phone: '086 262 408'},
    {n: '5', name: 'Park Haram', accountNumber: 'SM Entertainment', title: 'Artist', phone: '086 262 408'},
    {n: '6', name: 'Park Haram', accountNumber: 'SM Entertainment', title: 'Artist', phone: '086 262 408'},
    {n: '7', name: 'Park Haram', accountNumber: 'SM Entertainment', title: 'Artist', phone: '086 262 408'},
    {n: '8', name: 'Park Haram', accountNumber: 'SM Entertainment', title: 'Artist', phone: '086 262 408'},
    {n: '9', name: 'Park Haram', accountNumber: 'SM Entertainment', title: 'Artist', phone: '086 262 408'},
    {n: '10', name: 'Park Haram', accountNumber: 'SM Entertainment', title: 'Artist', phone: '086 262 408'},
    {n: '11', name: 'Park Haram', accountNumber: 'SM Entertainment', title: 'Artist', phone: '086 262 408'},
    {n: '12', name: 'Park Haram', accountNumber: 'SM Entertainment', title: 'Artist', phone: '086 262 408'},
    {n: '13', name: 'Park Haram', accountNumber: 'SM Entertainment', title: 'Artist', phone: '086 262 408'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
