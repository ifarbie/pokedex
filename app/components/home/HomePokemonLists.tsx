import type { PokemonData } from '~/types/Pokemon';
import HomePokemonCard from './HomePokemonCard';
import { useEffect, useState } from 'react';
import { useFetcher } from 'react-router';

type HomePokemonListsProps = {
  pokemons: PokemonData[];
};

const HomePokemonLists = ({ pokemons }: HomePokemonListsProps) => {
  const [allPokemons, setAllPokemons] = useState<PokemonData[]>(pokemons);
  const [offset, setOffset] = useState(27);

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data) return;

    setAllPokemons((prevPokemons) => [...prevPokemons, ...fetcher.data.pokemons]);

    setOffset((prevOffset) => prevOffset + 27);
  }, [fetcher.data]);

  function handleLoadMore() {
    fetcher.load(`/api/pokemons-load-more?limit=27&offset=${offset}`);
  }

  return (
    <section className='mx-auto max-w-7xl px-6 pb-20 pt-20'>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold text-gray-900 md:pt-20' id='explore'>
          Explore Pokemon
        </h2>

        <p className='mt-2 text-gray-500'>Pokémon you might want to explore.</p>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {allPokemons?.map((pokemon) => (
          <HomePokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      <div className='flex justify-end mt-8'>
        <button className='cursor-pointer rounded-lg text-sm font-medium transition text-gray-600  hover:text-gray-900 hover:underline' type='button' onClick={handleLoadMore} disabled={fetcher.state == 'loading'}>
          {fetcher.state == 'loading' ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </section> 
  );
};

export default HomePokemonLists;
