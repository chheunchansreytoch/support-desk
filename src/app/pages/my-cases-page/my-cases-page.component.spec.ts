import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCasesPageComponent } from './my-cases-page.component';

describe('MyCasesPageComponent', () => {
  let component: MyCasesPageComponent;
  let fixture: ComponentFixture<MyCasesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCasesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
