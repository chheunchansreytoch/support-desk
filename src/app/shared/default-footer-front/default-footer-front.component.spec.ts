import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFooterFrontComponent } from './default-footer-front.component';

describe('DefaultFooterFrontComponent', () => {
  let component: DefaultFooterFrontComponent;
  let fixture: ComponentFixture<DefaultFooterFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultFooterFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultFooterFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
