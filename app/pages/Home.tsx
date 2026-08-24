import NavBar from '~/components/NavBar';
import HomePage from '~/components/home/HomePage';
import type { Route } from './+types/Home';
import { getPokemons } from '~/services/pokemonApi';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Pokedex' }, { name: 'description', content: 'Welcome to Pokedex!' }];
}

export async function loader() {
  const pokemons = await getPokemons();

  return pokemons;
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <NavBar />
      <HomePage pokemons={loaderData} />
    </>
  );
}
