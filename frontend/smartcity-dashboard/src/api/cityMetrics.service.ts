import { apiClient } from './apiClient';
import type { CreateCityMetricRequest } from './dto/CreateCityMetricRequest';
import type { CityMetricResponse } from './dto/CityMetricResponse';

export const cityMetricsService = {
  async getAll(): Promise<CityMetricResponse[]> {
    const response = await apiClient.get<CityMetricResponse[]>('/api/CityMetrics');
    return response.data;
  },

  async create(payload: CreateCityMetricRequest): Promise<void> {
    await apiClient.post('/api/CityMetrics', payload);
  }
};