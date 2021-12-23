import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  options: AnimationOptions = {
    path: '/assets/lotties/page-not-found-404.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    // console.log(animationItem);
  }

}
