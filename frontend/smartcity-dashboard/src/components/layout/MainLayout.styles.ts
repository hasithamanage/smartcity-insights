import { CSSProperties } from 'react';

export const LayoutStyles = {
  root: {
    minHeight: '100vh',
    backgroundColor: '#f4f6f8', // Slightly cooler gray for SaaS background
    display: 'flex',
    flexDirection: 'column' as const,
  },
  header: {
    height: '56px', // Standardized height for enterprise top-bars
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #dfe3e8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 1.5rem',
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
    boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logoIcon: {
    fontSize: '1.2rem',
  },
  logoText: {
    fontSize: '1rem',
    fontWeight: 700,
    color: '#212b36', // Darker slate for readability
    margin: 0,
    letterSpacing: '-0.01em',
    textTransform: 'uppercase' as const,
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  userInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '4px 12px',
    borderRadius: '20px',
    backgroundColor: '#f9fafb',
    border: '1px solid #f1f3f5',
  },
  userBadge: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    backgroundColor: '#5c6ac4', // Professional indigo
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#ffffff',
  },
  userName: {
    fontSize: '0.85rem',
    color: '#637381',
    fontWeight: 600,
  },
  logoutBtn: {
    padding: '6px 12px',
    fontSize: '0.8rem',
    fontWeight: 600,
    color: '#bf0711',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'background-color 0.2s',
    '&:hover': {
      backgroundColor: '#fff1f0',
    }
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: '1280px', // Wider for dashboard visibility
    margin: '0 auto',
    padding: '1.5rem 2rem', // Generous but structured padding
  }
};