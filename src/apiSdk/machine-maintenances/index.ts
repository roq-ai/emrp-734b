import axios from 'axios';
import queryString from 'query-string';
import { MachineMaintenanceInterface, MachineMaintenanceGetQueryInterface } from 'interfaces/machine-maintenance';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getMachineMaintenances = async (
  query?: MachineMaintenanceGetQueryInterface,
): Promise<PaginatedInterface<MachineMaintenanceInterface>> => {
  const response = await axios.get('/api/machine-maintenances', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createMachineMaintenance = async (machineMaintenance: MachineMaintenanceInterface) => {
  const response = await axios.post('/api/machine-maintenances', machineMaintenance);
  return response.data;
};

export const updateMachineMaintenanceById = async (id: string, machineMaintenance: MachineMaintenanceInterface) => {
  const response = await axios.put(`/api/machine-maintenances/${id}`, machineMaintenance);
  return response.data;
};

export const getMachineMaintenanceById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/machine-maintenances/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMachineMaintenanceById = async (id: string) => {
  const response = await axios.delete(`/api/machine-maintenances/${id}`);
  return response.data;
};
