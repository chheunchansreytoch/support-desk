import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClosedCasesPageComponent } from './all-closed-cases-page.component';

describe('AllClosedCasesPageComponent', () => {
  let component: AllClosedCasesPageComponent;
  let fixture: ComponentFixture<AllClosedCasesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllClosedCasesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllClosedCasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
