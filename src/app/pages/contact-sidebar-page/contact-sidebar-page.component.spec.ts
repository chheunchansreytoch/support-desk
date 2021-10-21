import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSidebarPageComponent } from './contact-sidebar-page.component';

describe('ContactSidebarPageComponent', () => {
  let component: ContactSidebarPageComponent;
  let fixture: ComponentFixture<ContactSidebarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactSidebarPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSidebarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
