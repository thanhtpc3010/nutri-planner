import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import MealDetail from '../pages/MealDetail.jsx';
import Favorites from '../pages/Favorites.jsx';
import Calculator from '../pages/Calculator.jsx';
import Contact from '../pages/Contact.jsx';
import Feedback from '../pages/Feedback.jsx';
import Auth from '../pages/Auth.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meal/:id" element={<MealDetail />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/feedback" element={<Feedback />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="*" element={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-8">Page not found</p>
            <a href="/" className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-all font-medium">
              Go Home
            </a>
          </div>
        </div>
      } />
    </Routes>
  );
};

export default AppRoutes;

