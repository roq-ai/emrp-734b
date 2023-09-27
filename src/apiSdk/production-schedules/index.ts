import axios from 'axios';
import queryString from 'query-string';
import { ProductionScheduleInterface, ProductionScheduleGetQueryInterface } from 'interfaces/production-schedule';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getProductionSchedules = async (
  query?: ProductionScheduleGetQueryInterface,
): Promise<PaginatedInterface<ProductionScheduleInterface>> => {
  const response = await axios.get('/api/production-schedules', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createProductionSchedule = async (productionSchedule: ProductionScheduleInterface) => {
  const response = await axios.post('/api/production-schedules', productionSchedule);
  return response.data;
};

export const updateProductionScheduleById = async (id: string, productionSchedule: ProductionScheduleInterface) => {
  const response = await axios.put(`/api/production-schedules/${id}`, productionSchedule);
  return response.data;
};

export const getProductionScheduleById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/production-schedules/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteProductionScheduleById = async (id: string) => {
  const response = await axios.delete(`/api/production-schedules/${id}`);
  return response.data;
};
