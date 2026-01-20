import { useCityMetrics } from '../hooks/useCityMetrics';
import { CityMetricTable } from '../components/tables/CityMetricTable'; 
import { CreateMetricForm } from '../components/forms/CreateMetricForm';
import { LoadingScreen } from '../components/ui/LoadingScreen';
import { ErrorPanel } from '../components/ui/ErrorPanel';
import { AppLayout } from '../components/layout/AppLayout';
import { DashboardStyles as S } from './DashboardPage.styles';
import { useAuth } from '../context/AuthContext';

export function DashboardPage() {
  const { metrics, loading, error, reload } = useCityMetrics();
  const { user } = useAuth(); // Get the user status

  if (error) return <ErrorPanel message={error} onRetry={reload} />;
  if (loading) return <LoadingScreen />;

  return (
    <AppLayout title="City Metrics Overview">
      {/* Only show form if user is logged in */}
      {user ? (
        <CreateMetricForm onSuccess={reload} />
      ) : (
        <p style={{ textAlign: 'center', color: '#666' }}>
          🔒 Log in as Admin to add new sensor data.
        </p>
      )}
      <CityMetricTable metrics={metrics} />
    </AppLayout>
  );
}