import { useCityMetrics } from '../hooks/useCityMetrics';
import { CityMetricTable } from '../components/tables/CityMetricTable'; 
import { CreateMetricForm } from '../components/forms/CreateMetricForm';
import { LoadingScreen } from '../components/ui/LoadingScreen';
import { ErrorPanel } from '../components/ui/ErrorPanel';
import { AppLayout } from '../components/layout/AppLayout';
import { DashboardStyles as S } from './Dashboard.styles';

export function Dashboard() {
  const { metrics, loading, error, reload } = useCityMetrics();

  if (error) return <ErrorPanel message={error} onRetry={reload} />;
  if (loading) return <LoadingScreen />;

  return (
    <AppLayout 
      title="City Metrics Overview" 
      extraHeader={<span style={S.recordCount}>Total: {metrics.length}</span>}
    >
      <CreateMetricForm onSuccess={reload} />
      <CityMetricTable metrics={metrics} />
    </AppLayout>
  );
}