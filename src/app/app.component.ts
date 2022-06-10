import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadContacts, loadChats } from './store/actions';

import CONTACTS from '../assets/dummy-data/contacts.json';
import CHATS from '../assets/dummy-data/chats.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store:Store<{contacts:any[]}>) {}

  ngOnInit(): void {
    this.loadContacts();
    this.loadChats();
  }
  
  private loadContacts(){
    this.store.dispatch(loadContacts({contacts: CONTACTS}))
  }
  
  private loadChats(){
    this.store.dispatch(loadChats({chats: CHATS}))
  }
}