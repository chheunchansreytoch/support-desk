import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentCasesComponent } from './agent-cases.component';

describe('AgentCasesComponent', () => {
  let component: AgentCasesComponent;
  let fixture: ComponentFixture<AgentCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
