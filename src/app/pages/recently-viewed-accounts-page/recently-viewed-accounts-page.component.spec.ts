import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyViewedAccountsPageComponent } from './recently-viewed-accounts-page.component';

describe('RecentlyViewedAccountsPageComponent', () => {
  let component: RecentlyViewedAccountsPageComponent;
  let fixture: ComponentFixture<RecentlyViewedAccountsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyViewedAccountsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyViewedAccountsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
