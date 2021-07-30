import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { PopoverController } from '@ionic/angular';
import { TopRightMenuComponent } from './components/top-right-menu/top-right-menu.component';
import { debounceTime } from 'rxjs/operators';

interface Contact{
  name: string,
  info?: string
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {

  public showSearchbar:boolean = false;
  public searchbar:FormControl;
  
  private _contacts:Contact[] = [
    {
      name: 'My first contact',
      info: `My name isn't "My"`
    },
    {
      name: 'Andres'
    },
    {
      name: 'Joel'
    },
    {
      name: 'Lady'
    },
    {
      name: 'Rosmer'
    },
    {
      name: 'Patricia'
    },
    {
      name: 'Tomas'
    },
  ]
  public contacts:Contact[];
  
  constructor(private popoverCtrl: PopoverController) {
    this.contacts = this._contacts.sort((a, b) => a.name > b.name ? 1 : -1)
  }

  ngOnInit() {
    this.buildSearchForm();
  }

  public getContacts(){
    console.log('Get contacts');
  }
  
  public toggleSearchbar(state?:boolean){
    
    if(!this.showSearchbar || state)
      this.openSearchbar()
    else
      this.closeSearchbar()
  }
  
  private openSearchbar(){
    this.showSearchbar = true;
    console.log(this.searchbar)
  }
  
  private closeSearchbar(){
    this.showSearchbar = false;
  }

  public async presentMenu(ev: any){
    const popover = await this.popoverCtrl.create({
      component: TopRightMenuComponent,
      event: ev
    })

    await popover.present();
  }

  private buildSearchForm(){
    this.searchbar = new FormControl();

    this.subscribeSearchFormChanges();
  }

  private subscribeSearchFormChanges(){
    this.searchbar.valueChanges
      .pipe(
        debounceTime(100)
      )
      .subscribe(val => {
        this.filterContacts(val)
      })
  }

  private filterContacts(query:string){
    this.contacts = this._contacts.filter( contact => contact.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  }

}
