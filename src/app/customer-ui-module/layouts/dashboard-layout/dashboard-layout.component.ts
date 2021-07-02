import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.addClassToLayout(this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.addClassToLayout(event.url);
      }
    });
  }
  addClassToLayout(url: string) {
    if (url === '/customer-ui/docs') {
      document.body.classList.add('main-body-customer');
    } else {
      document.body.classList.remove('main-body-customer');
    }
  }

  ngOnDestroy(): void {}
}
