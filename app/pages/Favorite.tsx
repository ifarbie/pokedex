import NavBar from '~/components/NavBar';
import type { Route } from './+types/Home';
import FavoritePage from '~/components/FavoritePage';
import { getFavorites } from '~/utils/favorite';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Favorite Pokemon' }, { name: 'description', content: 'Your Favorite Pokemon!' }];
}

export async function clientLoader() {
  const favoritePokemons = getFavorites();

  return { favoritePokemons }
}

export default function Favorite({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <NavBar />
      <FavoritePage favoritePokemons={loaderData.favoritePokemons} />
    </>
  );
}


