import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseSidebarPageComponent } from './case-sidebar-page.component';

describe('CaseSidebarPageComponent', () => {
  let component: CaseSidebarPageComponent;
  let fixture: ComponentFixture<CaseSidebarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaseSidebarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseSidebarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
