export const LoginStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh'
  },
  card: {
    backgroundColor: '#fff',
    padding: '2.5rem',
    borderRadius: '12px',
    border: '1px solid #e0e0e0',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px'
  },
  inputGroup: {
    marginBottom: '1.5rem',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem'
  },
  input: {
    padding: '0.8rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem'
  },
  button: {
    width: '100%',
    padding: '0.8rem',
    backgroundColor: '#28a745', // Green for login
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold' as const,
    fontSize: '1rem'
  },
  error: {
    color: '#721c24',
    backgroundColor: '#f8d7da',
    padding: '0.8rem',
    borderRadius: '6px',
    marginBottom: '1rem',
    fontSize: '0.9rem',
    textAlign: 'center' as const
  }
};