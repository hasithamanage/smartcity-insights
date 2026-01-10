import type { CityMetric } from '../types/CityMetric';
import { MetricTable } from '../components/MetricTable';

interface Props {
  metrics: CityMetric[];
}

export function Dashboard({ metrics }: Props) {
  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>City Metrics Overview</h2>
        <span style={{ color: '#666' }}>Total Records: {metrics.length}</span>
      </header>

      <MetricTable metrics={metrics} />
    </div>
  );
}