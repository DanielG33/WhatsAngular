import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatsPageRoutingModule } from './chats-routing.module';

import { ChatsPage } from './chats.page';
import { ContactProfileComponent } from './components/contact-profile/contact-profile.component';
import { ImageViewerModule } from 'src/app/components/image-viewer/image-viewer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatsPageRoutingModule,
    ImageViewerModule
  ],
  declarations: [ChatsPage, ContactProfileComponent]
})
export class ChatsPageModule {}
