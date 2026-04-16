import { BrowserRouter as Router } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext.jsx';
import Layout from './components/layout/Layout.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </FavoritesProvider>
    </Router>
  );
}

export default App;

