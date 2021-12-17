import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllOpenCasesPageComponent } from './all-open-cases-page.component';

describe('AllOpenCasesPageComponent', () => {
  let component: AllOpenCasesPageComponent;
  let fixture: ComponentFixture<AllOpenCasesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllOpenCasesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllOpenCasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
