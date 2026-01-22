import { useCityMetrics } from '../hooks/useCityMetrics';
import { CityMetricTable } from '../components/tables/CityMetricTable'; 
import { CreateMetricForm } from '../components/forms/CreateMetricForm';
import { LoadingScreen } from '../components/ui/LoadingScreen';
import { ErrorPanel } from '../components/ui/ErrorPanel';
import { useAuth } from '../context/AuthContext';

export function DashboardPage() {
  const { metrics, loading, error, reload } = useCityMetrics();
  const { user } = useAuth();

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorPanel message={error} onRetry={reload} />;

  return (
    <>
      {/* Feature Section: Administration */}
      {user ? (
        <CreateMetricForm onSuccess={reload} />
      ) : (
        <div style={adminNoticeStyle}>
          🔒 Read-only Mode. Please log in to contribute sensor data.
        </div>
      )}

      {/* Feature Section: Data Grid */}
      <section style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '1.5rem', border: '1px solid #e3e6e8' }}>
        <CityMetricTable metrics={metrics} />
      </section>
    </>
  );
}

const adminNoticeStyle = {
  textAlign: 'center' as const,
  padding: '1.5rem',
  backgroundColor: '#e9ecef',
  borderRadius: '8px',
  marginBottom: '2rem',
  color: '#495057',
  fontSize: '0.9rem'
};