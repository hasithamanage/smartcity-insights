import { metricTypeLabel } from '../../utils/metricTypeLabel';

interface Props {
  type: number;
}

export function MetricTypeBadge({ type }: Props) {
  // Define colors based on the Backend Enum
  const getBadgeStyle = (type: number) => {
    const baseStyle: React.CSSProperties = {
      padding: '4px 12px',
      borderRadius: '12px',
      fontSize: '0.85rem',
      fontWeight: 'bold',
      color: 'white',
      display: 'inline-block'
    };

    switch (type) {
      case 1: return { ...baseStyle, backgroundColor: '#007bff' }; // Traffic (Blue)
      case 2: return { ...baseStyle, backgroundColor: '#28a745' }; // Air Quality (Green)
      case 3: return { ...baseStyle, backgroundColor: '#ffc107', color: '#333' }; // Energy (Yellow)
      default: return { ...baseStyle, backgroundColor: '#6c757d' }; // Unknown (Grey)
    }
  };

  return (
    <span style={getBadgeStyle(type)}>
      {metricTypeLabel(type)}
    </span>
  );
}