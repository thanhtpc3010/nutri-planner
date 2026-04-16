import { useState, useMemo, useCallback } from 'react';
import { mealService } from '../services/mealService.js';

export const useMeals = () => {
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    dietType: '',
    minCalories: '',
    maxCalories: '',
    allergens: []
  });

  // meals state for future async implementation
  // const [meals, setMeals] = useState([]);

  const fetchMeals = useCallback(async () => {
    // Future async implementation
  }, []);

  const filteredMeals = useMemo(() => {
    return mealService.filterMeals(filters);
  }, [filters]);

  const updateFilters = useCallback((newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      search: '',
      category: '',
      dietType: '',
      minCalories: '',
      maxCalories: '',
      allergens: []
    });
  }, []);

  return {
    meals: filteredMeals,
    filters,
    updateFilters,
    clearFilters,
    refetch: fetchMeals
  };
};

