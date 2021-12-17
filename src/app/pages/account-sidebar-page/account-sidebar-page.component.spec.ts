import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSidebarPageComponent } from './account-sidebar-page.component';

describe('AccountSidebarPageComponent', () => {
  let component: AccountSidebarPageComponent;
  let fixture: ComponentFixture<AccountSidebarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountSidebarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSidebarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
