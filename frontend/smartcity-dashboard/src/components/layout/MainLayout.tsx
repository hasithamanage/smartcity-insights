import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { LayoutStyles as S } from './MainLayout.styles';

interface MainLayoutProps {
  children: React.ReactNode;
  currentUser: { username: string } | null;
}

/**
 * MainLayout
 * Standardized application shell for authenticated users.
 */
export const MainLayout: React.FC<MainLayoutProps> = ({ children, currentUser }) => {
  const { logout } = useAuth();

  return (
    <div style={S.root}>
      <header style={S.header}>
        <div style={S.brand}>
          <span style={S.logoIcon}>🏙️</span>
          <h1 style={S.logoText}>SmartCity Insights</h1>
        </div>
        
        <nav style={S.nav}>
          <div style={S.userInfo}>
            <span style={S.userBadge}>{currentUser?.username[0].toUpperCase()}</span>
            <span style={S.userName}>{currentUser?.username}</span>
          </div>
          <button onClick={logout} style={S.logoutBtn}>
            Sign Out
          </button>
        </nav>
      </header>

      <main style={S.content}>
        {children}
      </main>
    </div>
  );
};