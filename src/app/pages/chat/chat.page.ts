import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectChat } from '../../store/selectors/chat'
import { insertMessage, markAsRead } from 'src/app/store/actions';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  private chatId:string;
  public contact:any;
  public messages:any[] = [];
  
  constructor(private route: ActivatedRoute, private store: Store<{chats: any}>) { }

  ngOnInit() {
    this.chatId = this.route.snapshot.paramMap.get('id');

    this.store.dispatch(markAsRead({ chatId: this.chatId }))
    
    this.store.select(selectChat(this.chatId)).subscribe(res => {
      this.messages = [...res.messages].reverse() || []
      
      if(!this.contact)
        this.contact = res.contact;
    })
  }

  send(input:HTMLInputElement){
    const content = input.value;
    
    if(!content || content == '')
      return
    
    const message = {
      content,
      timestamp: this.getCurrentTime(),
      from: 'dddgg33'
    }
    this.store.dispatch(insertMessage({chatId: this.chatId, message}))

    input.value = '';
  }

  getCurrentTime(){
    let date = new Date();
    return date.getTime();
  }
}
