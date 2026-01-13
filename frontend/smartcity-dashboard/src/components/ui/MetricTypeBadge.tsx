import { MetricType } from '../../domain/MetricType';

interface Props {
  type: MetricType; // Strict typing
}

export function MetricTypeBadge({ type }: Props) {
  switch (type) {
    case MetricType.Traffic:
      return <span style={{ color: 'blue' }}>🚗 Traffic</span>;
    case MetricType.AirQuality:
      return <span style={{ color: 'green' }}>🍃 Air Quality</span>;
    case MetricType.Energy:
      return <span style={{ color: 'orange' }}>⚡ Energy</span>;
    default:
      return <span>Unknown</span>;
  }
}