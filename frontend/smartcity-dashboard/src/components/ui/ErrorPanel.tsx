interface Props {
  message: string;
  onRetry: () => void;
}

export function ErrorPanel({ message, onRetry }: Props) {
  return (
    <div style={errorBoxStyle}>
      <h3 style={{ marginTop: 0 }}>⚠️ Something went wrong</h3>
      <p>{message}</p>
      <button onClick={onRetry} style={buttonStyle}>Try Again</button>
    </div>
  );
}

const errorBoxStyle: React.CSSProperties = {
  padding: '3rem',
  textAlign: 'center',
  color: '#721c24',
  backgroundColor: '#f8d7da',
  border: '1px solid #f5c6cb',
  borderRadius: '12px',
  margin: '2rem auto',
  maxWidth: '600px'
};

const buttonStyle = {
  padding: '0.5rem 1rem',
  backgroundColor: '#721c24',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};