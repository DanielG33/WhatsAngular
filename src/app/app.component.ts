import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadContacts } from './store/actions/contacts';

import CONTACTS from '../assets/dummy-data/contacts.json';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store:Store<{contacts:any[]}>) {}

  ngOnInit(): void {
    this.loadContacts();
  }
  
  private loadContacts(){
    this.store.dispatch(loadContacts({contacts: CONTACTS}))
  }
}