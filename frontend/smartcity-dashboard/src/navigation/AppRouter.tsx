import { useAuth } from '../context/AuthContext';
import { DashboardPage } from '../pages/DashboardPage';
import { LoginPage } from '../pages/LoginPage';
import { MainLayout } from '../components/layout/MainLayout';

/**
 * AppRouter
 * Orchestrates high-level page switching and Auth Gates.
 */
export const AppRouter = () => {
  const { isAuthenticated, isInitializing, user } = useAuth();

  // Prevent UI "jumping" while reading from localStorage
  if (isInitializing) {
    return null; // Or a high-level loading spinner
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <MainLayout currentUser={user}>
      <DashboardPage />
    </MainLayout>
  );
};