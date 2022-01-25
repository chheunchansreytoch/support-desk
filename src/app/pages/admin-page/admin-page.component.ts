import { Component, OnInit } from '@angular/core';
import { CaseStore } from 'src/app/stores/case.store';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {


  arrCases: Array<any> = [];

  saleData = [
    { name: "Mobiles", value: 105000 },
    { name: "Laptop", value: 55000 },
    { name: "AC", value: 15000 },
    { name: "Headset", value: 150000 },
    { name: "Fridge", value: 20000 }
  ];

  constructor(
    private caseStore: CaseStore,
  ) {
    // console.log('Hello');
    // const auth = localStorage.getItem('manager_auth');
    // if (auth) {
    //   const abc = JSON.parse(auth);
    //   console.log(abc);
    // }
   }

  ngOnInit(): void {
    this.fetchAllClosedCase();
  }

  fetchAllClosedCase() {
    this.caseStore.getClosedCases().then((res: any) => {
      this.arrCases =res;
      console.log(res);

    })
  }

}
