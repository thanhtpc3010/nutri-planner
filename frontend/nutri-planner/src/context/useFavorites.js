import { useContext } from 'react';
import { FavoritesContext } from './FavoritesContext.jsx';

export const useFavorites = () => useContext(FavoritesContext);

