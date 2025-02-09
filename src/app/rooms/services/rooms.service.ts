import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root',
})
export class RoomsService {
  roomList: RoomList[] = [
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

  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig) {
    console.log(config.apiEndpoint);
    console.log('Service Initialized.....');
  }

  getRooms() {
    return this.roomList;
  }
}
