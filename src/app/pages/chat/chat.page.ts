import { Component, ElementRef, OnInit, ViewChild, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  
  public messages:any[] = [];
  
  constructor() { }

  ngOnInit() {
    // this.loadItems();
  }

  updateScroll(){
    // console.log(this.myScrollContainer.nativeElement.scrollHeight)
    // this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  }

  loadItems(){
    let offset = this.messages.length;
    for(let i = 0; i < 20; i++){
      this.messages.unshift({text: (offset + i)})
    }
  }

  send(input){
    const text = input.value;
    const timestamp = this.getCurrentTime();
    this.messages.unshift({text, timestamp})
    input.value = '';
  }

  getCurrentTime(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let meridiem = 'a.m.';

    if(hours > 12){
      hours -= 12;
      meridiem = 'p.m.';
    }

    return `${hours}:${minutes} ${meridiem}`;
  }
}
