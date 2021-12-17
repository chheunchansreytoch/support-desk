import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsContactLayoutComponent } from './details-contact-layout.component';

describe('DetailsContactLayoutComponent', () => {
  let component: DetailsContactLayoutComponent;
  let fixture: ComponentFixture<DetailsContactLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsContactLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsContactLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
