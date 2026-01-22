import { MetricType } from '../../domain/MetricType';

export interface CreateCityMetricRequest {
  type: MetricType; // Changed from number
  value: number;
  location: string;
}