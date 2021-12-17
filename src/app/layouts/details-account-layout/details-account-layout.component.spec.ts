import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAccountLayoutComponent } from './details-account-layout.component';

describe('DetailsAccountLayoutComponent', () => {
  let component: DetailsAccountLayoutComponent;
  let fixture: ComponentFixture<DetailsAccountLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAccountLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAccountLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
