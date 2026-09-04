import { getPokemons } from '~/services/pokemonApi';
import type { Route } from './+types/PokemonLoadMore';

export async function loader({request}: Route.LoaderArgs) {
  const url = new URL(request.url);

  const limit = Number(url.searchParams.get('limit')) || 27;
  const offset = Number(url.searchParams.get('offset')) || 0;

  const pokemons = await getPokemons(limit, offset);

  return {
    pokemons,
  };
}

export default function Favorite() {
  return null;
}
