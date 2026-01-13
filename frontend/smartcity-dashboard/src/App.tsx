import { Dashboard } from './pages/Dashboard';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #eee', marginBottom: '2rem' }}>
        <h1>🏙️ SmartCity Insights</h1>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;