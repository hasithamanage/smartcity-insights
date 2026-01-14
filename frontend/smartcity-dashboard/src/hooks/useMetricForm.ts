import { useState } from 'react';
import { cityMetricsService } from '../api/cityMetrics.service';

export function useMetricForm(onSuccess: () => void) {
  const [formData, setFormData] = useState({ type: 1, value: 0, location: '' });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await cityMetricsService.create(formData);
      setFormData({ type: 1, value: 0, location: '' }); // Reset
      onSuccess();
    } catch (err) {
      setError("Failed to create metric. Please check your inputs.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, setFormData, error, isSubmitting, handleSubmit };
}