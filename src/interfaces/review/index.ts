import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { BookingInterface } from 'interfaces/booking';
import { GetQueryInterface } from 'interfaces';

export interface ReviewInterface {
  id?: string;
  rating: number;
  comment?: string;
  user_id: string;
  car_id: string;
  booking_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  car?: CarInterface;
  booking?: BookingInterface;
  _count?: {};
}

export interface ReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  comment?: string;
  user_id?: string;
  car_id?: string;
  booking_id?: string;
}
