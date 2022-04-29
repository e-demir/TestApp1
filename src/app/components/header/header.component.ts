import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() public defaultTerm: string = '';
  @Output() public complete: EventEmitter<any> = new EventEmitter<any>();

  public menuList: any[] = [
    {
      "name": "Ana Sayfa",
      "isActive": true
    },
    {
      "name": "Fiyatlandırma",
      "isActive": false
    },
    {
      "name": "SSS",
      "isActive": false
    },
  ]

  private timer:any;
  public text:string = "Emrullah DEMİR";
  public name:string = "searchTerm";

  constructor() { }

  ngOnInit(): void {
  }

  public onClickEvent(menu: any) {
    console.log(menu);
    menu = !menu.isActive;
  }

  public getActivePage(menu:any){
    this.complete.emit(menu);
  }

  public onChange(event: any) {
    event.preventDefault();
    clearTimeout(this.timer);

    //Auto-Complete
    this.timer = setTimeout(() => {
      this.postToServer(event.target.value);
    }, 500);

    //Enter key code
    // const keyCode = event.keyCode;
    // if (keyCode === 13) {
    //   console.log("data posted");
    //   console.log(event.target.value);          
    // }    
  }

  private postToServer(value: any) {    
    this.complete.emit(value);
  }

}
