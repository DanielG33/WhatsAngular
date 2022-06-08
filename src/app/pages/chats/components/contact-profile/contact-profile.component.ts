import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageViewerComponent } from 'src/app/components/image-viewer/image-viewer.component';

@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.scss'],
})
export class ContactProfileComponent implements OnInit {

  public imgViewerOpts = { zoom: true }
  
  @Input() contact:any = {};
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  public async openImageViewer(src:string){
    const modal = await this.modalCtrl.create({
      component: ImageViewerComponent,
      canDismiss: true,
      componentProps: { src }
    })

    modal.present();
  }

}
