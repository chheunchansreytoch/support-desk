import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFrontLayoutComponent } from './login-front-layout.component';

describe('LoginFrontLayoutComponent', () => {
  let component: LoginFrontLayoutComponent;
  let fixture: ComponentFixture<LoginFrontLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFrontLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFrontLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
