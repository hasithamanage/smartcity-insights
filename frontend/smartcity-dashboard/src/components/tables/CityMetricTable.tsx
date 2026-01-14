import type { CityMetricResponse } from '../../api/dto/CityMetricResponse';
import { MetricTypeBadge } from '../ui/MetricTypeBadge'; 
import { TableStyles as S } from './CityMetricTable.styles';
import { EmptyTableState } from './EmptyTableState';

interface Props {
  metrics: CityMetricResponse[];
}

export function CityMetricTable({ metrics }: Props) {
  // 1. Guard Clause for Empty State
  if (metrics.length === 0) return <EmptyTableState />;

  // 2. Helper for formatting (Internal Logic)
  const formatDate = (timestamp: string) => {
    const utcTime = timestamp.endsWith('Z') ? timestamp : `${timestamp}Z`;
    return new Date(utcTime).toLocaleString('fi-FI');
  };

  return (
    <table style={S.table}>
      <thead>
        <tr style={S.headerRow}>
          <th style={S.cell}>Type</th>
          <th style={S.cell}>Value</th>
          <th style={S.cell}>Location</th>
          <th style={S.cell}>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {metrics.map((m) => (
          <tr key={m.id}>
            <td style={S.cell}><MetricTypeBadge type={m.type} /></td>
            <td style={S.cell}>{m.value}</td>
            <td style={S.cell}>{m.location}</td>
            <td style={S.cell}>{formatDate(m.timestamp)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}