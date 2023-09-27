import axios from 'axios';
import queryString from 'query-string';
import { ManufacturingProcessInterface, ManufacturingProcessGetQueryInterface } from 'interfaces/manufacturing-process';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getManufacturingProcesses = async (
  query?: ManufacturingProcessGetQueryInterface,
): Promise<PaginatedInterface<ManufacturingProcessInterface>> => {
  const response = await axios.get('/api/manufacturing-processes', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createManufacturingProcess = async (manufacturingProcess: ManufacturingProcessInterface) => {
  const response = await axios.post('/api/manufacturing-processes', manufacturingProcess);
  return response.data;
};

export const updateManufacturingProcessById = async (
  id: string,
  manufacturingProcess: ManufacturingProcessInterface,
) => {
  const response = await axios.put(`/api/manufacturing-processes/${id}`, manufacturingProcess);
  return response.data;
};

export const getManufacturingProcessById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(
    `/api/manufacturing-processes/${id}${query ? `?${queryString.stringify(query)}` : ''}`,
  );
  return response.data;
};

export const deleteManufacturingProcessById = async (id: string) => {
  const response = await axios.delete(`/api/manufacturing-processes/${id}`);
  return response.data;
};
