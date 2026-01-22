import { MetricType, MetricTypeMetadata } from '../../domain/MetricType';

interface Props {
  type: MetricType;
}

export function MetricTypeBadge({ type }: Props) {
  // Look up the metadata for this specific enum value
  const metadata = MetricTypeMetadata[type];

  // Fallback for safety if an unknown type comes from the API
  if (!metadata) {
    return <span style={badgeStyle('#666')}>❓ Unknown</span>;
  }

  return (
    <span style={badgeStyle(metadata.color)}>
      {metadata.icon} {metadata.label}
    </span>
  );
}


// Enterprise Badge Styling

const badgeStyle = (color: string): React.CSSProperties => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '0.85rem',
  fontWeight: 600,
  backgroundColor: `${color}15`, // Adds 15% transparency to the hex color
  color: color,
  border: `1px solid ${color}30`,
  whiteSpace: 'nowrap'
});