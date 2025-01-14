import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice, pokemonSlice } from './slice';

export const store = configureStore({
  reducer:{
    // 여기에 slice 추가
    pokemon: pokemonSlice.reducer,
    favorite: favoriteSlice.reducer
  }
})