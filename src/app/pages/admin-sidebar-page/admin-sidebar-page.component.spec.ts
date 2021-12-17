import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidebarPageComponent } from './admin-sidebar-page.component';

describe('AdminSidebarPageComponent', () => {
  let component: AdminSidebarPageComponent;
  let fixture: ComponentFixture<AdminSidebarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSidebarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSidebarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
