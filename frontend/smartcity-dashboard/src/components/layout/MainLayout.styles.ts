import { CSSProperties } from 'react';

export const LayoutStyles = {
  root: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa', // SaaS "Background Gray"
    display: 'flex',
    flexDirection: 'column' as const,
  },
  header: {
    height: '64px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e3e6e8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 2rem',
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  logoIcon: {
    fontSize: '1.25rem',
  },
  logoText: {
    fontSize: '1.1rem',
    fontWeight: 700,
    color: '#1a1d21',
    margin: 0,
    letterSpacing: '-0.02em',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    paddingRight: '1rem',
    borderRight: '1px solid #eee',
  },
  userBadge: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: '#e9ecef',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#495057',
  },
  userName: {
    fontSize: '0.9rem',
    color: '#495057',
    fontWeight: 500,
  },
  logoutBtn: {
    padding: '0.5rem 1rem',
    fontSize: '0.85rem',
    fontWeight: 600,
    color: '#dc3545',
    backgroundColor: 'transparent',
    border: '1px solid #f8d7da',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1.5rem',
  }
};