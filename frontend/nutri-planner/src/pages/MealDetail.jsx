import { useParams } from 'react-router-dom';
import { mealService } from '../services/mealService.js';
import NutritionTable from '../components/common/NutritionTable.jsx';
import IngredientsList from '../components/meal/IngredientsList.jsx';
import StepsList from '../components/meal/StepsList.jsx';
import MealCard from '../components/common/MealCard.jsx';
import { useFavorites } from '../hooks/useFavorites.js';

const MealDetail = () => {
  const { id } = useParams();
  const meal = mealService.getMealById(id);
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  if (!meal) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Meal not found</h1>
        <p className="text-gray-600">The meal you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <MealCard meal={meal} />
        </div>
        <div className="lg:w-2/3 space-y-6">
          <NutritionTable nutrition={meal.nutrition} />
          <IngredientsList ingredients={meal.ingredients} />
        </div>
      </div>
      
      <StepsList steps={meal.steps} />
      
      <div className="bg-gray-50 rounded-xl p-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {meal.tags.map((tag, index) => (
            <span key={index} className="px-4 py-2 bg-primary-100 text-primary-800 text-sm rounded-full font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <button
            onClick={() => {
              if (isFavorite(meal.id)) {
                removeFavorite(meal.id);
              } else {
                addFavorite(meal.id);
              }
            }}
            className={`px-6 py-3 rounded-xl font-medium transition-all ${
              isFavorite(meal.id)
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            {isFavorite(meal.id) ? '❤️ Remove from Favorites' : '💚 Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;

