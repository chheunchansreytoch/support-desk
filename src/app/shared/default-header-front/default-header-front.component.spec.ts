import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultHeaderFrontComponent } from './default-header-front.component';

describe('DefaultHeaderFrontComponent', () => {
  let component: DefaultHeaderFrontComponent;
  let fixture: ComponentFixture<DefaultHeaderFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultHeaderFrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultHeaderFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
