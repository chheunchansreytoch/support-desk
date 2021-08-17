import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/typeScripts/agents';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { RestService } from 'src/app/services/res.service';

@Component({
  selector: 'app-admin-header-front',
  templateUrl: './admin-header-front.component.html',
  styleUrls: ['./admin-header-front.component.scss']
})
export class AdminHeaderFrontComponent implements OnInit {


  contactName: any;
  agents: Agent[] = [];
  // constructor(public rs: RestService) { }

  ngOnInit(): void {
    // this.rs.getAgents().subscribe((response) => {
    //   this.agents = response;
    // });

    // this.rs.getAgents().subscribe();
  }

  // Search() {
  //   if (this.contactName == "") {
  //     this.ngOnInit();
  //   }else  {
  //     this.agents = this.agents.filter(res => {
  //       return res.contactName.toLocaleLowerCase().match(this.contactName.toLocaleLowerCase());
  //     });
  //   }
  // }

}
