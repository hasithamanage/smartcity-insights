import { useEffect, useState } from 'react';
import { apiClient } from './api/apiClient';
import type { CityMetric } from './types/CityMetric';
import { Dashboard } from './pages/Dashboard';

function App() {
  const [metrics, setMetrics] = useState<CityMetric[]>([]);

  useEffect(() => {
    apiClient.get<CityMetric[]>('/api/CityMetrics')
      .then(res => setMetrics(res.data))
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>SmartCity Insights</h1>
      <Dashboard metrics={metrics} />
    </div>
  );
}

export default App;
