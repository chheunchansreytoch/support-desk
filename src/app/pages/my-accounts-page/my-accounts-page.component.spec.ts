import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountsPageComponent } from './my-accounts-page.component';

describe('MyAccountsPageComponent', () => {
  let component: MyAccountsPageComponent;
  let fixture: ComponentFixture<MyAccountsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAccountsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
