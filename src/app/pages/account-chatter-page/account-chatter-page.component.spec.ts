import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountChatterPageComponent } from './account-chatter-page.component';

describe('AccountChatterPageComponent', () => {
  let component: AccountChatterPageComponent;
  let fixture: ComponentFixture<AccountChatterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountChatterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountChatterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
