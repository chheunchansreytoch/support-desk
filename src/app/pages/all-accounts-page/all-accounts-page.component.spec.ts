import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAccountsPageComponent } from './all-accounts-page.component';

describe('AllAccountsPageComponent', () => {
  let component: AllAccountsPageComponent;
  let fixture: ComponentFixture<AllAccountsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAccountsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAccountsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
