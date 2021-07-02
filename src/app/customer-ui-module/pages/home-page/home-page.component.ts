import { Component, OnInit } from '@angular/core';
import { DATA } from 'src/app/customer-ui-module/dummy/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}
  dummy = DATA;
  items = [1, 2, 3, 4, 5];
  goToDashboard(): void {
    this.router.navigate(['/customer-ui/case/list']);
  }

  ngOnInit(): void {}
}
