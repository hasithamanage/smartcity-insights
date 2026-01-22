export enum MetricType {
  Traffic = 1,
  AirQuality = 2,
  Energy = 3
}

// helper for the UI within the domain file
export const MetricTypeMetadata: Record<MetricType, { label: string; icon: string; color: string }> = {
  [MetricType.Traffic]: { label: 'Traffic', icon: '🚗', color: '#007bff' },
  [MetricType.AirQuality]: { label: 'Air Quality', icon: '🍃', color: '#28a745' },
  [MetricType.Energy]: { label: 'Energy', icon: '⚡', color: '#ffc107' },
};