import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyViewedContactsPageComponent } from './recently-viewed-contacts-page.component';

describe('RecentlyViewedContactsPageComponent', () => {
  let component: RecentlyViewedContactsPageComponent;
  let fixture: ComponentFixture<RecentlyViewedContactsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyViewedContactsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyViewedContactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
