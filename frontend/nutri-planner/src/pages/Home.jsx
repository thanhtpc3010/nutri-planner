import { useMeals } from '../hooks/useMeals.js';
import MealCard from '../components/common/MealCard.jsx';
import MealFilters from '../components/meal/MealFilters.jsx';

const Home = () => {
  const { meals, updateFilters, clearFilters } = useMeals();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Discover Healthy Meals
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Browse our collection of nutritious recipes filtered by diet, calories, and more.
        </p>
      </div>

      <MealFilters 
        filters={{ /* integrate with useMeals filters */ }}
        onFiltersChange={updateFilters}
        onClearFilters={clearFilters}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {meals.map(meal => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>

      {meals.length === 0 && (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🍽️</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">No meals found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your filters</p>
          <button
            onClick={clearFilters}
            className="px-8 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-all font-medium"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

