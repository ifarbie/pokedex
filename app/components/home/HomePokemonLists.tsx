import type { PokemonData } from '~/types/Pokemon';
import HomePokemonCard from './HomePokemonCard';

type HomePokemonListsProps = {
  pokemons: PokemonData[];
};

const HomePokemonLists = ({ pokemons }: HomePokemonListsProps) => {
  return (
    <section className='mx-auto max-w-7xl px-6 pb-20 pt-20'>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold text-gray-900 md:pt-20' id='explore'>
          Explore Pokemon
        </h2>

        <p className='mt-2 text-gray-500'>Pokémon you might want to explore.</p>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {pokemons?.map((pokemon) => (
          <HomePokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </section>
  );
};

export default HomePokemonLists;
