import { GetQueryInterface } from 'interfaces';

export interface SupplierInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface SupplierGetQueryInterface extends GetQueryInterface {
  id?: string;
}
