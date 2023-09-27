import { GetQueryInterface } from 'interfaces';

export interface WarehouseInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface WarehouseGetQueryInterface extends GetQueryInterface {
  id?: string;
}
