import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycasesTablePageComponent } from './mycases-table-page.component';

describe('MycasesTablePageComponent', () => {
  let component: MycasesTablePageComponent;
  let fixture: ComponentFixture<MycasesTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MycasesTablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MycasesTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
