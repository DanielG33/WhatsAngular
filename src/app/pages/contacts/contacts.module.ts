import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactsPageRoutingModule } from './contacts-routing.module';

import { ContactsPage } from './contacts.page';
import { TopRightMenuComponent } from "./components/top-right-menu/top-right-menu.component";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ContactsPageRoutingModule
  ],
  declarations: [ ContactsPage, TopRightMenuComponent ]
})
export class ContactsPageModule {}
