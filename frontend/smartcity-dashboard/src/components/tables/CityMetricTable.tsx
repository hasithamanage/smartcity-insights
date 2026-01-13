import type { CityMetricResponse } from '../../api/dto/CityMetricResponse';
import { MetricTypeBadge } from '../ui/MetricTypeBadge'; 

interface Props {
  metrics: CityMetricResponse[];
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
            <td><MetricTypeBadge type={m.type} /></td>
            <td>{m.value}</td>
            <td>{m.location}</td>
            <td>{new Date(m.timestamp + (m.timestamp.endsWith('Z') ? '' : 'Z')).toLocaleString('fi-FI')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}