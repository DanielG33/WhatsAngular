import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-top-right-menu',
  templateUrl: './top-right-menu.component.html',
  styleUrls: ['./top-right-menu.component.scss'],
})
export class TopRightMenuComponent implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  public refresh(){
    console.log('Refresh contacts list.');
    this.close();
  }

  public close(){
    this.popoverCtrl.dismiss();
  }
  
}
