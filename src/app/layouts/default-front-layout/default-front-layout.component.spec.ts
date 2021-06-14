import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFrontLayoutComponent } from './default-front-layout.component';

describe('DefaultFrontLayoutComponent', () => {
  let component: DefaultFrontLayoutComponent;
  let fixture: ComponentFixture<DefaultFrontLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultFrontLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultFrontLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
