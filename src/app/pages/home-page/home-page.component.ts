import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  selected = 'option2';

  constructor() { }

  ngOnInit(): void {
  }

  firstNameChanged(event: any) {
    console.log(event.target.value)
  }

  btnSubmitClicked() {
    alert('btnSubmit is Clicked');
  }

}
