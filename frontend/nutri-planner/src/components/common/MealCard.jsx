import { Link } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites.js';
import { formatCalories } from '../../utils/formatNutrition.js';

const MealCard = ({ meal }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const toggleFavorite = () => {
    if (isFavorite(meal.id)) {
      removeFavorite(meal.id);
    } else {
      addFavorite(meal.id);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden group">
      <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative overflow-hidden">
        <img 
          src={meal.image || '/assets/react.svg'} 
          alt={meal.name}
          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute top-3 right-3">
          <button
            onClick={toggleFavorite}
            className={`p-2 rounded-full bg-white/90 hover:bg-white transition-all ${
              isFavorite(meal.id) 
                ? 'text-red-500 fill-red-500' 
                : 'text-gray-500 hover:text-primary-500'
            }`}
            aria-label="Toggle favorite"
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-6">
        <Link to={`/meal/${meal.id}`} className="block hover:no-underline">
          <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-primary-600 transition-colors">
            {meal.name}
          </h3>
        </Link>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full font-medium">
            {meal.category}
          </span>
          {meal.dietType.map(type => (
            <span key={type} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
              {type}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary-600">
            {formatCalories(meal.calories)}
          </span>
          <Link 
            to={`/meal/${meal.id}`}
            className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all font-medium"
          >
            View Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MealCard;

