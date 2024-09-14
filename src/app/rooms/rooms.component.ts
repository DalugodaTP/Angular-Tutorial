import { Component,OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';

  numberOfRooms = 10;

  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [];

  constructor() {}

  selectedRoom!: RoomList;

  title ="Room List";

  ngOnInit(): void {
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'A/C, Wi-Fi, Tv',
        price: 500,
        photos: 'www.image.com',
        checkInTime: new Date('11-Nov-2022'),
        checkOutTime: new Date('12-Nov-2022'),
        rating: 2.42132,
      },
      {
        roomNumber: 2,
        roomType: 'Economy Room',
        amenities: 'A/C, Wi-Fi, Tv',
        price: 1000,
        photos: 'www.image2.com',
        checkInTime: new Date('11-Nov-2022'),
        checkOutTime: new Date('12-Nov-2022'),
        rating: 3.888888,
      },
      {
        roomNumber: 3,
        roomType: 'PentHouse',
        amenities: 'A/C, Wi-Fi, Tv',
        price: 1500,
        photos: 'www.image.com',
        checkInTime: new Date('11-Nov-2022'),
        checkOutTime: new Date('12-Nov-2022'),
        rating: 2.4231231,
      },
    ];
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
