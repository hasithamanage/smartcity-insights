import { useEffect, useState } from 'react';
import { apiClient } from './api/apiClient';
import type { CityMetric } from './types/CityMetric';

function App() {
  const [metrics, setMetrics] = useState<CityMetric[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // This calls https://localhost:7018/api/CityMetrics
    apiClient.get<CityMetric[]>('/api/CityMetrics')
      .then(response => {
        setMetrics(response.data);
      })
      .catch(err => {
        console.error("API Error:", err);
        setError("Could not connect to the API. Check CORS settings!");
      });
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Smart City Insights</h1>
      <hr />
      
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {metrics.length === 0 && !error && <p>Loading metrics...</p>}

      <ul>
        {metrics.map(metric => (
          <li key={metric.id} style={{ marginBottom: '10px' }}>
            <strong>{metric.location}</strong>: {metric.value} 
            <br />
            <small>Time: {new Date(metric.timestamp).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;