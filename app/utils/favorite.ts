export function getFavorites(): any[] {
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
    (pokemon: any) => pokemon.id === pokemonId
  );
}

export function saveFavorites(favorites: any[]) {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}
