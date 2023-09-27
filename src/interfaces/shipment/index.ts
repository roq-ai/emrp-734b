import { GetQueryInterface } from 'interfaces';

export interface ShipmentInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ShipmentGetQueryInterface extends GetQueryInterface {
  id?: string;
}
