import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentContactsComponent } from './agent-contacts.component';

describe('AgentContactsComponent', () => {
  let component: AgentContactsComponent;
  let fixture: ComponentFixture<AgentContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
