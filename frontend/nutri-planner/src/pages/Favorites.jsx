import { useFavorites } from '../hooks/useFavorites.js';
import MealCard from '../components/common/MealCard.jsx';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favoriteMeals } = useFavorites();

  if (favoriteMeals.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-6xl mb-6">💝</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">No favorites yet</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Save your favorite meals from the home page to see them here.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-all font-semibold shadow-lg"
        >
          Browse Meals
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Favorites ({favoriteMeals.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {favoriteMeals.map(meal => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;

