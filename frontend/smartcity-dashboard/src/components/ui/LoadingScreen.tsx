export function LoadingScreen() {
  return (
    <div style={containerStyle}>
      <div style={titleStyle}>Loading SmartCity data…</div>
      <div style={subTextStyle}>Connecting to KiltaSphere API and fetching latest metrics</div>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '5rem 2rem',
  color: '#555',
  backgroundColor: '#fafafa',
  borderRadius: '12px',
  margin: '2rem auto',
  maxWidth: '1000px'
};

const titleStyle = { fontSize: '1.5rem', fontWeight: '500', marginBottom: '0.5rem' };
const subTextStyle = { fontSize: '1rem', opacity: 0.7 };