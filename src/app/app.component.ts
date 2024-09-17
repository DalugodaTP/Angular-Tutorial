import { Component, ViewChild,ViewContainerRef,AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{



  title = 'hotelinventoryapp';

  role='Admin';
  // role='None';
  // role='User';
  @ViewChild('user',{read: ViewContainerRef}) vcr!: ViewContainerRef;


  ngAfterViewInit(): void {
    const componentRef = this.vcr.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms =50;
  }

  @ViewChild('name',{static: true}) name!: ElementRef;

  ngOnInit(): void {
    this.loggerService?.log('App Component.ngOnInit()');
    console.log(this.name.nativeElement.innerText = "Hilton Hotel");
  }

  constructor(private loggerService: LoggerService){

  }

}
