import { GetQueryInterface } from 'interfaces';

export interface ManufacturingProcessInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ManufacturingProcessGetQueryInterface extends GetQueryInterface {
  id?: string;
}
