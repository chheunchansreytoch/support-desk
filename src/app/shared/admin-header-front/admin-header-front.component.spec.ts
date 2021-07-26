import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeaderFrontComponent } from './admin-header-front.component';

describe('AdminHeaderFrontComponent', () => {
  let component: AdminHeaderFrontComponent;
  let fixture: ComponentFixture<AdminHeaderFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHeaderFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHeaderFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
