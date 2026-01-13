import { useEffect, useState } from 'react';
import { cityMetricsService } from '../api/cityMetrics.service';
import type { CityMetricResponse } from '../api/dto/CityMetricResponse';
import { CityMetricTable } from '../components/tables/CityMetricTable'; 
import { CreateMetricForm } from '../components/forms/CreateMetricForm';

export function Dashboard() {
  const [metrics, setMetrics] = useState<CityMetricResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      if (metrics.length === 0) setLoading(true);
      
      const data = await cityMetricsService.getAll();
      setMetrics(data);
    } catch (error) {
      console.error("Failed to load metrics:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) return <div>Loading city data...</div>;

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <header style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        <h2>City Metrics Overview</h2>
        <span>Total Records: {metrics.length}</span>
      </header>

      {/* Create Metric Form nested inside the Dashboard */}
      <CreateMetricForm onSuccess={loadData} />
      <CityMetricTable metrics={metrics} />
    </div>
  );
}