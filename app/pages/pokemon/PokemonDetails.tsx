import NavBar from '~/components/NavBar';
import type { Route } from './+types/PokemonDetails';
import { getPokemonById } from '~/services/pokemonApi';
import PokemonDetailsPage from '~/components/PokemonDetailsPage';
import { isFavorite } from '~/utils/favorite';
import type { Pokemon } from '~/types/Pokemon';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Pokedex' }, { name: 'description', content: 'Welcome to Pokedex!' }];
}

export async function loader({ params }: Route.LoaderArgs) {
  const pokemonId = params.id;
  const pokemon = await getPokemonById(pokemonId);

  return pokemon;
}

export async function clientLoader({ serverLoader, params }: Route.ClientLoaderArgs) {
  const pokemon = await serverLoader();
  return {
    isFavorite: isFavorite(params.id),
    pokemon,
  };
}
clientLoader.hydrate = true as const;

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();

  const action = formData.get('action');

  if (action === 'favorite') {
    const pokemon = JSON.parse(String(formData.get('pokemon')));

    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    const alreadyFavorite = favorites.some((item: Pokemon) => item.id === pokemon.id);

    if (!alreadyFavorite) {
      // Belum favorite → tambahkan
      favorites.push(pokemon);
    } else {
      // Sudah favorite → hapus
      const newFavorites = favorites.filter((item: Pokemon) => item.id !== pokemon.id);

      localStorage.setItem('favorites', JSON.stringify(newFavorites));

      return null;
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    return null;
  }

  return null;
}

export function HydrateFallback() {
  return <div>Loading...</div>;
}

export default function PokemonDetail({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <NavBar />
      <PokemonDetailsPage pokemon={loaderData.pokemon} isFavorite={loaderData.isFavorite} />
    </>
  );
}
