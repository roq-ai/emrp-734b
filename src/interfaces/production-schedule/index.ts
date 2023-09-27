import { GetQueryInterface } from 'interfaces';

export interface ProductionScheduleInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface ProductionScheduleGetQueryInterface extends GetQueryInterface {
  id?: string;
}
