export const TableStyles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginTop: '1rem',
  },
  headerRow: {
    borderBottom: '2px solid #333',
    backgroundColor: '#f4f4f4',
  },
  cell: {
    padding: '12px',
    textAlign: 'left' as const,
    borderBottom: '1px solid #eee',
  },
  emptyContainer: {
    padding: '3rem',
    textAlign: 'center' as const,
    color: '#666',
    backgroundColor: '#f9f9f9',
    border: '2px dashed #ddd',
    borderRadius: '12px',
    marginTop: '1.5rem',
  }
};