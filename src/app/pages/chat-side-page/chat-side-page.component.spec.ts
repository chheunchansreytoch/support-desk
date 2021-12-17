import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSidePageComponent } from './chat-side-page.component';

describe('ChatSidePageComponent', () => {
  let component: ChatSidePageComponent;
  let fixture: ComponentFixture<ChatSidePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatSidePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
