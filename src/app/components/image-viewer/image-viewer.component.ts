import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {

  @Input() public src:string;
  @Input() private zoom:boolean = true;
  
  public sliderOpts = {
    zoom: this.zoom,
    allowSlideNext: false,
    allowSlidePrev: false,
    allowTouchMove: false,
  };
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  public close(){
    this.modalCtrl.dismiss()
  }

}
