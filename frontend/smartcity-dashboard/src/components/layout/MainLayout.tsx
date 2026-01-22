import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { LayoutStyles as S } from './MainLayout.styles';

interface MainLayoutProps {
  children: React.ReactNode;
  title: string; // Moved title management to the Layout level
  currentUser: { username: string } | null;
  actions?: React.ReactNode; // For "Add" buttons or filters
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, title, currentUser, actions }) => {
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
          <button onClick={logout} style={S.logoutBtn}>Sign Out</button>
        </nav>
      </header>

      {/* Dashboard Area */}
      <main style={S.content}>
        <h2 style={{ marginBottom: '1.5rem', fontWeight: 700 }}>{title}</h2>
        {children}
      </main>

    </div>
  );
};