import { useState, useEffect, useCallback } from 'react';
import { cityMetricsService } from '../api/cityMetrics.service';
import type { CityMetricResponse } from '../api/models/CityMetricResponse';

export function useCityMetrics() {
  const [metrics, setMetrics] = useState<CityMetricResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      setError(null);
      // Only show full-page loading on the very first fetch
      if (metrics.length === 0) setLoading(true);
      
      const data = await cityMetricsService.getAll();
      setMetrics(data);
    } catch (err) {
      console.error("Failed to load metrics:", err);
      setError("Unable to load city metrics. Please try again later.");
    } finally {
      setLoading(false);
    }
  }, [metrics.length]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { metrics, loading, error, reload: loadData };
}