import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyViewedCasesPageComponent } from './recently-viewed-cases-page.component';

describe('RecentlyViewedCasesPageComponent', () => {
  let component: RecentlyViewedCasesPageComponent;
  let fixture: ComponentFixture<RecentlyViewedCasesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyViewedCasesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyViewedCasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
