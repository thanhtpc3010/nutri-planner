import { useContext } from 'react';
import { FavoritesContext } from './favorites-context.js';

export const useFavorites = () => useContext(FavoritesContext);

