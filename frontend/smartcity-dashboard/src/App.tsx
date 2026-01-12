import { useEffect, useState, useCallback } from 'react';
import { apiClient } from './api/apiClient';
import type { CityMetric } from './types/CityMetric';
import { Dashboard } from './pages/Dashboard';
import { CreateMetricForm } from './components/forms/CreateMetricForm'; 

function App() {
  const [metrics, setMetrics] = useState<CityMetric[]>([]);

  // 1. Move fetch logic to a reusable function
  const fetchMetrics = useCallback(() => {
    apiClient.get<CityMetric[]>('/api/CityMetrics')
      .then(res => setMetrics(res.data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  // 2. Initial load
  useEffect(() => {
    fetchMetrics();
  }, [fetchMetrics]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #eee', marginBottom: '2rem' }}>
        <h1>🏙️ SmartCity Insights</h1>
      </header>

      {/* 3. Add the form and pass the refresh function as a prop */}
      <CreateMetricForm onSuccess={fetchMetrics} />
      
      <Dashboard metrics={metrics} />
    </div>
  );
}

export default App;