import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCasesPageComponent } from './manage-cases-page.component';

describe('ManageCasesPageComponent', () => {
  let component: ManageCasesPageComponent;
  let fixture: ComponentFixture<ManageCasesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCasesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCasesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
