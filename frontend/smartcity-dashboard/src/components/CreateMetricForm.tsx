import { useState } from 'react';
import { apiClient } from '../api/apiClient';

interface Props {
  onSuccess: () => void;
}

export function CreateMetricForm({ onSuccess }: Props) {
  const [formData, setFormData] = useState({ type: 1, value: 0, location: '' });
   // 1. Add: State for error messages
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error before trying

    // 2. Add: Validation Logic
    if (formData.location.trim().length < 3) {
      setError("Location must be at least 3 characters long.");
      return;
    }

    if (formData.value < 0 || formData.value > 1000) {
      setError("Value must be between 0 and 1000.");
      return;
    }

    try {
      await apiClient.post('/api/CityMetrics', formData);
      setFormData({ type: 1, value: 0, location: '' });
      onSuccess();
    } catch (err) {
      if (err && typeof err === 'object') {
        const message =
          (err as any)?.response?.data?.error ||
          "Failed to save to server. Please try again.";

        setError(message);
      }
    } 
  };

  return (
    <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Add New City Metric</h3>

      {/* 3. Add: Visual Error Message */}
      {error && (
        <div style={{ color: 'white', backgroundColor: '#dc3545', padding: '10px', borderRadius: '4px', marginBottom: '10px' }}>
          ⚠️ {error}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
        <label>
          Type:
          <select value={formData.type} onChange={e => setFormData({ ...formData, type: Number(e.target.value) })}>
            <option value={1}>Traffic</option>
            <option value={2}>Air Quality</option>
            <option value={3}>Energy</option>
          </select>
        </label>
        <label>
          Value:
          <input type="number" value={formData.value} onChange={e => setFormData({ ...formData, value: Number(e.target.value) })} />
        </label>
        <label>
          Location:
          <input type="text" value={formData.location} onChange={e => setFormData({ ...formData, location: e.target.value })} placeholder="e.g. Lutakko" />
        </label>
        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
          Add Metric
        </button>
      </form>
    </div>
  );
}