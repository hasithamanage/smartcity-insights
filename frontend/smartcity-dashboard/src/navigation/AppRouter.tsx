import { useAuth } from '../context/AuthContext';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/LoginPage';
import { MainLayout } from '../components/layout/MainLayout';

export const AppRouter = () => {
  const { isAuthenticated, isInitializing, user } = useAuth();

  // 1. Wait for the provider to check localStorage
  if (isInitializing) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading SmartcityInsights...</div>;
  }

  // 2. If no user/token, only show the LoginPage
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  // 3. Only if authenticated, show the Dashboard
  return (
    <MainLayout title="City Metrics Overview" currentUser={user}>
      <DashboardPage />
    </MainLayout>
  );
};