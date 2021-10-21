import { Component, OnInit } from '@angular/core';
import { BtnSideBarService } from 'src/app/services/btn-side-bar.service';

@Component({
  selector: 'app-admin-front-layout',
  templateUrl: './admin-front-layout.component.html',
  styleUrls: ['./admin-front-layout.component.scss']
})
export class AdminFrontLayoutComponent implements OnInit {

  constructor(public sideBarService: BtnSideBarService) { }

  ngOnInit(): void {
  }

}
