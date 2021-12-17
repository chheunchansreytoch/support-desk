import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCaseFrontLayoutComponent } from './details-case-front-layout.component';

describe('DetailsCaseFrontLayoutComponent', () => {
  let component: DetailsCaseFrontLayoutComponent;
  let fixture: ComponentFixture<DetailsCaseFrontLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCaseFrontLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCaseFrontLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
