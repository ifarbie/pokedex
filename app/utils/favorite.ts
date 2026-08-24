import type { Pokemon } from "~/types/Pokemon";

export function getFavorites(): Pokemon[] {
  try {
    const favorites = localStorage.getItem('favorites');

    return favorites ? JSON.parse(favorites) : [];
  } catch {
    return [];
  }
}

export function isFavorite(pokemonId: string) {
  const favorites = getFavorites();

  return favorites.some(
    (pokemon: Pokemon) => pokemon.id === pokemonId
  );
}

export function saveFavorites(favorites: Pokemon[]) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}
