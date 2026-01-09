export interface CityMetric {
  id: string;      // Guid from C#
  type: number;    // e.g., 0 for Temperature, 1 for Humidity
  value: number;
  location: string;
  timestamp: string;
}