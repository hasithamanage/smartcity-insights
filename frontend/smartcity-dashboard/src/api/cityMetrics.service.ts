import { apiClient } from './apiClient';
import type { CreateCityMetricRequest } from './models/CreateCityMetricRequest';
import type { CityMetricResponse } from './models/CityMetricResponse';

export const cityMetricsService = {
  async getAll(): Promise<CityMetricResponse[]> {
    const response = await apiClient.get<CityMetricResponse[]>('/api/CityMetrics');
    return response.data;
  },

  async create(payload: CreateCityMetricRequest): Promise<void> {
    await apiClient.post('/api/CityMetrics', payload);
  }
};