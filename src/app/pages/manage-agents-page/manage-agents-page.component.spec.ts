import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAgentsPageComponent } from './manage-agents-page.component';

describe('ManageAgentsPageComponent', () => {
  let component: ManageAgentsPageComponent;
  let fixture: ComponentFixture<ManageAgentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAgentsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAgentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
