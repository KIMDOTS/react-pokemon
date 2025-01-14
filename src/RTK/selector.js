import { createSelector } from '@reduxjs/toolkit';

// 포켓몬아이디와 일치하는 것을 찾아내는 셀렉터
export const selectPokemonById = (pokemonId) => 
  createSelector(
  state => state.pokemon.data,
  (pokemon) => pokemon.find(el => el.id === pokemonId)
)

// 정규식을 입력받아 정규식 데이터와 일치하는 포켓몬을 찾아내는 셀렉터
export const selectPokemonByRegExp = (reg) => createSelector(
  state => state.pokemon.data,
  (pokemon) => pokemon.filter(el => el.name.match(reg))
)

// 찜한 포켓몬 찾아내는 셀렉터
export const selectFavoritePokemons = createSelector(
  state => state.pokemon.data,
  state => state.favorite,
  (pokemon, favorite) => {
    return pokemon.filter(el => favorite.includes(el.id))
  }
)