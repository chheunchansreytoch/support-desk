import { Component, OnInit } from '@angular/core';
import { MESSAGES } from '../../dummy/app';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.scss'],
})
export class ChatDisplayComponent implements OnInit {
  constructor() {}
  messages = MESSAGES;
  ngOnInit(): void {}
}
