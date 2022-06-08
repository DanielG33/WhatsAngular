import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactProfileComponent } from './components/contact-profile/contact-profile.component';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  public chats:any[] = [
    {
      id: 'chat1',
      title: 'Contact name',
      pending: 5,
      lastMessage: {
        timestamp: '4:02pm',
        text: 'This is the last message. Gets truncated if too long.'
      }
    },
    {
      id: 'chat2',
      title: 'Another contact',
      pending: 0,
      lastMessage: {
        timestamp: '4:02pm',
        text: 'You already read the last message. No pending messages.'
      }
    },
  ]
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async showContactProfile(chatId:string){    
    const modal = await this.modalController.create({
      component: ContactProfileComponent,
      canDismiss: true,
      cssClass: 'modal-transparent',
      showBackdrop: true,
      componentProps: {
        contact: {
          name: 'Contact name',
          avatar: 'https://picsum.photos/300',
        }
      }
    })

    return await modal.present();
  }

}
