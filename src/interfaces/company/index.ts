import { CarInterface } from 'interfaces/car';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  address?: string;
  established_date?: any;
  website?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  car?: CarInterface[];

  _count?: {
    car?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  website?: string;
  name?: string;
  tenant_id?: string;
}
