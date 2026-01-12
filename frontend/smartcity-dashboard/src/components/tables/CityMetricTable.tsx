import type { CityMetric } from '../types/CityMetric';
import { MetricTypeBadge } from '../ui/MetricTypeBadge'; 

interface Props {
  metrics: CityMetric[];
}

export function CityMetricTable({ metrics }: Props) {
  return (
    <table width="100%" cellPadding={10} style={{ borderCollapse: 'collapse', marginTop: '1rem' }}>
      <thead>
        <tr style={{ borderBottom: '2px solid #333', backgroundColor: '#f4f4f4' }}>
          <th align="left">Type</th>
          <th align="left">Value</th>
          <th align="left">Location</th>
          <th align="left">Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {metrics.map((m) => (
          <tr key={m.id} style={{ borderBottom: '1px solid #eee' }}>
            <td>
              <MetricTypeBadge type={m.type} />
            </td>
            <td>{m.value}</td>
            <td>{m.location}</td>
            <td>{new Date(m.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}