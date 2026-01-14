import { useMetricForm } from '../../hooks/useMetricForm';
import { FormStyles as S } from './CreateMetricForm.styles';

interface Props {
  onSuccess: () => void;
}

export function CreateMetricForm({ onSuccess }: Props) {
  const { formData, setFormData, error, isSubmitting, handleSubmit } = useMetricForm(onSuccess);

  return (
    <section style={S.container}>
      <h3 style={{ marginTop: 0 }}>Add New Sensor Reading</h3>
      
      {error && <div style={S.errorBanner}>{error}</div>}

      <form onSubmit={handleSubmit}>
        <div style={S.grid}>
          {/* Metric Type */}
          <div style={S.fieldGroup}>
            <label>Metric Type</label>
            <select 
              style={S.input}
              value={formData.type}
              onChange={(e) => setFormData({ ...formData, type: Number(e.target.value) })}
            >
              <option value={1}>Traffic</option>
              <option value={2}>Air Quality</option>
              <option value={3}>Energy</option>
            </select>
          </div>

          {/* Value */}
          <div style={S.fieldGroup}>
            <label>Value</label>
            <input 
              style={S.input}
              type="number" 
              value={formData.value}
              onChange={(e) => setFormData({ ...formData, value: Number(e.target.value) })}
            />
          </div>

          {/* Location */}
          <div style={S.fieldGroup}>
            <label>Location</label>
            <input 
              style={S.input}
              placeholder="e.g. Helsinki North"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting} 
          style={{ ...S.button, opacity: isSubmitting ? 0.7 : 1 }}
        >
          {isSubmitting ? 'Saving...' : '➕ Add Metric'}
        </button>
      </form>
    </section>
  );
}