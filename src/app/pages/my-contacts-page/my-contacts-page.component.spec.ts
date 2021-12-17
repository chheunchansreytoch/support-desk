import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyContactsPageComponent } from './my-contacts-page.component';

describe('MyContactsPageComponent', () => {
  let component: MyContactsPageComponent;
  let fixture: ComponentFixture<MyContactsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyContactsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyContactsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
