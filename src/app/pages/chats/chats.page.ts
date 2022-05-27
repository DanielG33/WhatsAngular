import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  public chats:any[] = [
    {
      title: 'Contact name',
      pending: 5,
      lastMessage: {
        timestamp: '4:02pm',
        text: 'This is the last message. Gets truncated if too long.'
      }
    },
    {
      title: 'Another contact',
      pending: 0,
      lastMessage: {
        timestamp: '4:02pm',
        text: 'You already read the last message. No pending messages.'
      }
    },
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
