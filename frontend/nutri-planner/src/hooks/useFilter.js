import { useState } from 'react';
import { CATEGORIES, DIET_TYPES, ALLERGENS } from '../utils/constants.js';

export const useFilter = () => {
  const [filterState, setFilterState] = useState({
    search: '',
    category: '',
    dietType: '',
    minCalories: 0,
    maxCalories: 1000,
    allergens: []
  });

  const updateSearch = (search) => {
    setFilterState(prev => ({ ...prev, search }));
  };

  const updateCategory = (category) => {
    setFilterState(prev => ({ ...prev, category }));
  };

  const updateDietType = (dietType) => {
    setFilterState(prev => ({ ...prev, dietType }));
  };

  const updateCalories = (min, max) => {
    setFilterState(prev => ({ ...prev, minCalories: min, maxCalories: max }));
  };

  const toggleAllergen = (allergen) => {
    setFilterState(prev => ({
      ...prev,
      allergens: prev.allergens.includes(allergen)
        ? prev.allergens.filter(a => a !== allergen)
        : [...prev.allergens, allergen]
    }));
  };

  const clearAllFilters = () => {
    setFilterState({
      search: '',
      category: '',
      dietType: '',
      minCalories: 0,
      maxCalories: 1000,
      allergens: []
    });
  };

  const isFilterActive = () => {
    const { search, category, dietType, minCalories, maxCalories, allergens } = filterState;
    return search || category || dietType || minCalories > 0 || maxCalories < 1000 || allergens.length > 0;
  };

  return {
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
  };
};

