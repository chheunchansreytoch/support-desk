import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BtnSideBarService } from 'src/app/services/btn-side-bar.service';

@Component({
  selector: 'app-admin-sidebar-page',
  templateUrl: './admin-sidebar-page.component.html',
  styleUrls: ['./admin-sidebar-page.component.scss'],
})
export class AdminSidebarPageComponent implements OnInit {
  public selectedItem;

  public items;
  currentRoute: string = '';

  constructor(
    public sideBarService: BtnSideBarService,
    private router: Router,
    ) {

  }

  ngOnInit(): void {

  }

  btnLogOutClicked() {
    localStorage.removeItem("manager_auth");
    this.router.navigate(['/']);
  }
}
