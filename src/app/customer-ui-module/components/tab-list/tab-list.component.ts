import { Component, OnInit } from '@angular/core';
import { CASELIST } from '../../dummy/app';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss'],
})
export class TabListComponent implements OnInit {
  constructor() {}

  selectedIndex: number = NaN;
  caseList = CASELIST;

  ngOnInit(): void {}

  btnChatClicked(index: number) {
    this.selectedIndex = index;
  }
}
