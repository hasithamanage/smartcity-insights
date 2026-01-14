import { TableStyles as S } from './CityMetricTable.styles';

export function EmptyTableState() {
  return (
    <div style={S.emptyContainer}>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: 0 }}>📊 No metrics found</p>
      <p style={{ marginTop: '0.5rem' }}>Start by adding a new sensor reading above.</p>
    </div>
  );
}