import { ReviewInterface } from 'interfaces/review';
import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  start_date: any;
  end_date: any;
  user_id: string;
  car_id: string;
  pickup_location?: string;
  dropoff_location?: string;
  created_at?: any;
  updated_at?: any;
  review?: ReviewInterface[];
  user?: UserInterface;
  car?: CarInterface;
  _count?: {
    review?: number;
  };
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  car_id?: string;
  pickup_location?: string;
  dropoff_location?: string;
}
