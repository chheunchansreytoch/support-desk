import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactChatterPageComponent } from './contact-chatter-page.component';

describe('ContactChatterPageComponent', () => {
  let component: ContactChatterPageComponent;
  let fixture: ComponentFixture<ContactChatterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactChatterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactChatterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
