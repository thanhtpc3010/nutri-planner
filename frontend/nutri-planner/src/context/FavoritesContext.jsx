import React, { createContext, useState, useEffect } from 'react';
import { mealService } from '../services/mealService.js';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    localStorage.setItem('nutriplanner-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (mealId) => {
    if (!favorites.includes(mealId)) {
      setFavorites(prev => [...prev, mealId]);
    }
  };

  const removeFavorite = (mealId) => {
    setFavorites(prev => prev.filter(id => id !== mealId));
  };

  const isFavorite = (mealId) => favorites.includes(mealId);

  const favoriteMeals = mealService.getAllMeals().filter(meal => isFavorite(meal.id));

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addFavorite,
      removeFavorite,
      isFavorite,
      favoriteMeals
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};

