import { Component,DoCheck,OnInit, ViewChild,AfterViewInit, AfterViewChecked } from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  providers:[RoomsService]
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  constructor(private roomService: RoomsService) {
    this.roomList = roomService.getRooms();
  }
  ngAfterViewChecked(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title="Roooms View";
  }

  ngDoCheck(): void {
    console.log('on Chages is called')
  }

  selectedRoom!: RoomList;

  title ="Room List";

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms-List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'add room',
      amenities: 'A/C, Wi-Fi, Tv',
      price: 1500,
      photos: 'www.image.com',
      checkInTime: new Date('11-Nov-2022'),
      checkOutTime: new Date('12-Nov-2022'),
      rating: 2.4231231,
    };

    this.roomList = [...this.roomList, room];
  }

}
