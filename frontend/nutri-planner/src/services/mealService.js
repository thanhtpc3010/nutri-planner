import mealsData from '../data/meals.json' with { type: 'json' };

const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Smoothies'];
const dietTypes = ['Vegan', 'Keto', 'HighProtein', 'GlutenFree', 'LowCalorie'];

export const mealService = {
  getAllMeals: () => mealsData,

  getMealById: (id) => {
    return mealsData.find(meal => meal.id === id);
  },

  filterMeals: (filters = {}) => {
    let filtered = [...mealsData];

    if (filters.category && categories.includes(filters.category)) {
      filtered = filtered.filter(meal => meal.category === filters.category);
    }

    if (filters.dietType && dietTypes.includes(filters.dietType)) {
      filtered = filtered.filter(meal => 
        meal.dietType.includes(filters.dietType)
      );
    }

    if (filters.minCalories) {
      filtered = filtered.filter(meal => meal.calories >= filters.minCalories);
    }

    if (filters.maxCalories) {
      filtered = filtered.filter(meal => meal.calories <= filters.maxCalories);
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(meal =>
        meal.name.toLowerCase().includes(searchLower) ||
        meal.ingredients.some(ing => 
          ing.name.toLowerCase().includes(searchLower)
        )
      );
    }

    if (filters.allergens && filters.allergens.length > 0) {
      filtered = filtered.filter(meal => 
        filters.allergens.every(allergen => 
          !meal.allergens.includes(allergen)
        )
      );
    }

    return filtered;
  },

  searchMeals: (query) => {
    if (!query) return mealsData;
    const searchLower = query.toLowerCase();
    return mealsData.filter(meal =>
      meal.name.toLowerCase().includes(searchLower) ||
      meal.ingredients.some(ing => 
        ing.name.toLowerCase().includes(searchLower)
      )
    );
  }
};

export default mealService;

