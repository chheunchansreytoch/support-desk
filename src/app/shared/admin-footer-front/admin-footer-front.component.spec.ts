import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFooterFrontComponent } from './admin-footer-front.component';

describe('AdminFooterFrontComponent', () => {
  let component: AdminFooterFrontComponent;
  let fixture: ComponentFixture<AdminFooterFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFooterFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFooterFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
