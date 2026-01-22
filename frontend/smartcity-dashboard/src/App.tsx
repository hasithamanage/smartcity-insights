import { AuthProvider } from './context/AuthContext';
import { AppRouter } from './navigation/AppRouter';
import { GlobalStyles } from './styles/GlobalStyles';
import { ErrorBoundary } from './components/ui/ErrorBoundary';


const App = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <GlobalStyles />
        <AppRouter />
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;