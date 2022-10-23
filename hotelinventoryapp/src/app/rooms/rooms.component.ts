import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  hotelName= 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms:20,
    aviableRooms:10,
    bookedrooms:5
  }

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms= !this.hideRooms;
  }
}
