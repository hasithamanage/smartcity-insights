import type { CityMetric } from '../types/CityMetric';
import { CityMetricTable } from '../components/tables/CityMetricTable'; 

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

      <CityMetricTable metrics={metrics} />
    </div>
  );
}