import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllContactsPageComponent } from './all-contacts-page.component';

describe('AllContactsPageComponent', () => {
  let component: AllContactsPageComponent;
  let fixture: ComponentFixture<AllContactsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllContactsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllContactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
