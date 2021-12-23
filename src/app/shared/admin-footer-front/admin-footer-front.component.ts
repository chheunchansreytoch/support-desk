import { Component, OnInit } from '@angular/core';
import { PaginationStore } from 'src/app/stores/pagination.store';

@Component({
  selector: 'app-admin-footer-front',
  templateUrl: './admin-footer-front.component.html',
  styleUrls: ['./admin-footer-front.component.scss']
})
export class AdminFooterFrontComponent implements OnInit {

  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;

  constructor(
    public paginationStore: PaginationStore
  ) { }

  ngOnInit(): void {
    this.handlePage(null);
  }

  async handlePage(e: any) {
    this.currentPage = e?.pageIndex || 0;
    this.pageSize = e?.pageSize || 10;
    await this.paginationStore.getAgentsWithPagination(this.pageSize, this.currentPage, '');
  }

}
