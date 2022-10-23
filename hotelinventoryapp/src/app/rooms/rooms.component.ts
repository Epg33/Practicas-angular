import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    aviableRooms: 10,
    bookedrooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 2,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 3,
      roomType: 'Private Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 15000,
      photos:'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021')
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
