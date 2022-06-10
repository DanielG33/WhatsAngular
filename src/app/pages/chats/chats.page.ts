import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { ContactProfileComponent } from './components/contact-profile/contact-profile.component';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {

  public chats:any[] = []
  
  constructor(private modalController: ModalController, private store:Store<{chats: any[]}>) { }

  ngOnInit() {
    this.store.select('chats').subscribe(res => {
      this.chats = res || [];
    })
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
