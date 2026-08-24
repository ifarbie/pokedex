import type { Pokemon } from '~/types/Pokemon';
import BackToHomeButton from '../BackToHomeButton';
import FavoriteHeader from './FavoriteHeader';
import FavoriteLists from './FavoriteLists';

type FavoritePageProps = {
  favoritePokemons: Pokemon[];
};

export default function FavoritePage({ favoritePokemons }: FavoritePageProps) {
  const isEmpty = favoritePokemons.length === 0;

  return (
    <main className='min-h-screen bg-gray-50'>
      <div className='mx-auto max-w-6xl px-6 py-10'>
        {/* Back */}
        <BackToHomeButton />

        {/* Header */}
        <FavoriteHeader />

        {/* Empty State */}
        <FavoriteLists favoritePokemons={favoritePokemons} isEmpty={isEmpty} />
      </div>
    </main>
  );
}
