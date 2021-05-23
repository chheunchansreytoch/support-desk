import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCasesFrontComponent } from './all-cases-front.component';

describe('AllCasesFrontComponent', () => {
  let component: AllCasesFrontComponent;
  let fixture: ComponentFixture<AllCasesFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCasesFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCasesFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
