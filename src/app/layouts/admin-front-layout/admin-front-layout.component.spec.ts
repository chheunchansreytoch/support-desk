import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFrontLayoutComponent } from './admin-front-layout.component';

describe('AdminFrontLayoutComponent', () => {
  let component: AdminFrontLayoutComponent;
  let fixture: ComponentFixture<AdminFrontLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFrontLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFrontLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
