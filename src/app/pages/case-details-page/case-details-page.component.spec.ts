import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseDetailsPageComponent } from './case-details-page.component';

describe('CaseDetailsPageComponent', () => {
  let component: CaseDetailsPageComponent;
  let fixture: ComponentFixture<CaseDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
