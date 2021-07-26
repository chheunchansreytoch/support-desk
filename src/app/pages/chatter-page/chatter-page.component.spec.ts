import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatterPageComponent } from './chatter-page.component';

describe('ChatterPageComponent', () => {
  let component: ChatterPageComponent;
  let fixture: ComponentFixture<ChatterPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatterPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatterPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
