import { useState } from 'react';
import { apiClient } from '../api/apiClient';

interface Props {
  onSuccess: () => void; // Callback to refresh the table
}

export function CreateMetricForm({ onSuccess }: Props) {
  const [formData, setFormData] = useState({
    type: 1, // Default to Traffic
    value: 0,
    location: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // POST CityMetricsController.cs
      await apiClient.post('/api/CityMetrics', formData);
      setFormData({ type: 1, value: 0, location: '' }); // Reset form
      onSuccess(); // Trigger table refresh
    } catch (error) {
      console.error("Failed to add metric:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Add New City Metric</h3>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-end' }}>
        <label>
          Type:
          <select value={formData.type} onChange={e => setFormData({...formData, type: Number(e.target.value)})}>
            <option value={1}>Traffic</option>
            <option value={2}>Air Quality</option>
            <option value={3}>Energy</option>
          </select>
        </label>
        <label>
          Value:
          <input type="number" value={formData.value} onChange={e => setFormData({...formData, value: Number(e.target.value)})} />
        </label>
        <label>
          Location:
          <input type="text" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} placeholder="e.g. Lutakko" required />
        </label>
        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
          Add Metric
        </button>
      </div>
    </form>
  );
}