import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs-page',
  templateUrl: './docs-page.component.html',
  styleUrls: ['./docs-page.component.scss'],
})
export class DocsPageComponent implements OnInit {
  constructor() {}

  selectedIndex: number = 0;
  dataObject = {
    title: 'Lorem Ipsum',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };
  ngOnInit(): void {}
  tabButtonStatusClicked(index: number) {
    this.selectedIndex = index;
    console.log(this.selectedIndex);
  }
}
