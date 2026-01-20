import { AuthProvider } from './context/AuthContext';
import { AppRouter } from './navigation/AppRouter';
import { GlobalStyles } from './styles/GlobalStyles';

/**
 * App Composition Root
 * Responsible for wiring global infrastructure providers.
 */
const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <AppRouter />
    </AuthProvider>
  );
};

export default App;