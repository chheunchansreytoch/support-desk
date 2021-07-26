import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAgentAccountPageComponent } from './manage-agent-account-page.component';

describe('ManageAgentAccountPageComponent', () => {
  let component: ManageAgentAccountPageComponent;
  let fixture: ComponentFixture<ManageAgentAccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAgentAccountPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAgentAccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
