export interface Room {
  totalRooms:number;
  aviableRooms:number;
  bookedrooms:number;
}

export interface RoomList {
  roomNumber:number;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkInTime: Date;
  checkOutTime: Date;
}
