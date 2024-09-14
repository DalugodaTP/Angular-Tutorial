import { Component, ViewChild,ViewContainerRef,AfterViewInit } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{


  title = 'hotelinventoryapp';

  // role='Admin';
  // role='None';
  // role='User';
  @ViewChild('user',{read: ViewContainerRef}) vcr!: ViewContainerRef;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms =50;
  }

}
