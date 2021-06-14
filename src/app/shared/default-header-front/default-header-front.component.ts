import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-header-front',
  templateUrl: './default-header-front.component.html',
  styleUrls: ['./default-header-front.component.scss']
})
export class DefaultHeaderFrontComponent implements OnInit {

  listItems = ['Tests','Devices','Builds','Services','Projects'];
  onItemClick(category:string, index: number)
  {
    console.log(`${category} -> ${this.listItems[index]}`)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
