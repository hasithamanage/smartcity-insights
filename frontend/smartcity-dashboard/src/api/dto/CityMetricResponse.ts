import { MetricType } from '../../domain/MetricType';

export interface CityMetricResponse {
  id: string;
  type: MetricType; // Changed from number
  value: number;
  location: string;
  timestamp: string;
}