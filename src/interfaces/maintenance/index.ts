import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface MaintenanceInterface {
  id?: string;
  car_id: string;
  maintenance_date: any;
  description?: string;
  cost?: number;
  next_maintenance_date?: any;
  created_at?: any;
  updated_at?: any;

  car?: CarInterface;
  _count?: {};
}

export interface MaintenanceGetQueryInterface extends GetQueryInterface {
  id?: string;
  car_id?: string;
  description?: string;
}
