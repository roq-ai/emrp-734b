import { GetQueryInterface } from 'interfaces';

export interface MachineMaintenanceInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface MachineMaintenanceGetQueryInterface extends GetQueryInterface {
  id?: string;
}
