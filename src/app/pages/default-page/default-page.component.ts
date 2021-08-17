import { Component, OnInit } from '@angular/core';
import { AllMyCases } from 'src/app/typeScripts/all_my_cases';
import { Router, RouterModule,} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-default-page',
  templateUrl: './default-page.component.html',
  styleUrls: ['./default-page.component.scss']
})

export class DefaultPageComponent implements OnInit {

  selectedOption = '3';
  public Items;

  constructor(public router: Router, private location: Location){
    this.Items = [
      {name: 'All Closed Cases'},
      {name: 'All Open Cases'},
      {name: 'My Cases'},
      {name: 'My Open'},
      {name: 'Recently Viewed Cases'},
    ]
  }

  ngOnInit(): void {
  }

}
