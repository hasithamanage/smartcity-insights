export const FormStyles = {
  container: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #e0e0e0',
    marginBottom: '2rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '1rem'
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem'
  },
  input: {
    padding: '0.6rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  },
  button: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold' as const,
    transition: 'background-color 0.2s'
  },
  errorBanner: {
    color: '#721c24',
    backgroundColor: '#f8d7da',
    padding: '0.8rem',
    borderRadius: '6px',
    marginBottom: '1rem',
    fontSize: '0.9rem',
    border: '1px solid #f5c6cb'
  }
};