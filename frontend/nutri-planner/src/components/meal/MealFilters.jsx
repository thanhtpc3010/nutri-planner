import { useFilter } from '../../hooks/useFilter.js';
import SearchInput from '../common/SearchInput.jsx';

const MealFilters = () => {
  const {
    filterState,
    updateSearch,
    updateCategory,
    updateDietType,
    updateCalories,
    toggleAllergen,
    clearAllFilters,
    isFilterActive,
    CATEGORIES,
    DIET_TYPES,
    ALLERGENS
  } = useFilter();

  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Search */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
          <SearchInput 
            value={filterState.search}
            onChange={(e) => updateSearch(e.target.value)}
            placeholder="Meal name or ingredients..."
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            value={filterState.category}
            onChange={(e) => updateCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Diet Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Diet Type</label>
          <select
            value={filterState.dietType}
            onChange={(e) => updateDietType(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">All Diets</option>
            {DIET_TYPES.map(diet => (
              <option key={diet} value={diet}>{diet}</option>
            ))}
          </select>
        </div>

        {/* Calories Range */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Calories</label>
          <div className="flex gap-4 items-center">
            <input
              type="number"
              value={filterState.minCalories}
              onChange={(e) => updateCalories(e.target.value, filterState.maxCalories)}
              placeholder="Min"
              className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              min="0"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              value={filterState.maxCalories}
              onChange={(e) => updateCalories(filterState.minCalories, e.target.value)}
              placeholder="Max"
              className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              min="0"
            />
            <span className="text-sm text-gray-500">kcal</span>
          </div>
        </div>

        {/* Allergens */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-3">Avoid Allergens</label>
          <div className="flex flex-wrap gap-2">
            {ALLERGENS.map(allergen => (
              <label key={allergen} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={filterState.allergens.includes(allergen)}
                  onChange={() => toggleAllergen(allergen)}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{allergen}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {isFilterActive() && (
        <button
          onClick={clearAllFilters}
          className="mt-6 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all font-medium"
        >
          Clear All Filters
        </button>
      )}
    </div>
  );
};

export default MealFilters;

