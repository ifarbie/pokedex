import { Link } from 'react-router';
import FavoritePokemonCard from './FavoritePokemonCard';
import type { Pokemon } from '~/types/Pokemon';

type FavoriteListsProps = {
  favoritePokemons: Pokemon[];
  isEmpty: boolean;
};

const FavoriteLists = ({ favoritePokemons, isEmpty }: FavoriteListsProps) => {
  return (
    <>
      {isEmpty ? (
        <div className='flex min-h-100 flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white px-6 text-center'>
          {/* Icon */}
          <div className='flex h-20 w-20 items-center justify-center rounded-full bg-red-50 text-4xl text-red-400'>♡</div>

          <h2 className='mt-6 text-2xl font-bold text-gray-900'>No favorite Pokémon yet</h2>

          <p className='mt-2 max-w-md text-gray-500'>You haven't added any Pokémon to your favorites. Start exploring and save your favorite Pokémon here!</p>

          <Link to='/#explore' className='mt-6 rounded-xl bg-red-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-600'>
            Explore Pokémon
          </Link>
        </div>
      ) : (
        /* Pokemon List */
        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {favoritePokemons.map((pokemon: Pokemon) => (
            <FavoritePokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </>
  );
};

export default FavoriteLists;
