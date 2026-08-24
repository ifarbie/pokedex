import { Link } from 'react-router';
import type { PokemonData } from '~/types/Pokemon';
import HomePokemonCard from './HomePokemonCard';

type HomePageProps = {
  pokemons: PokemonData[];
};

export default function HomePage({ pokemons }: HomePageProps) {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Hero */}
      <section className='mx-auto grid max-w-7xl items-center gap-12 px-6 pt-20 md:grid-cols-2 md:pt-28'>
        {/* Text */}
        <div>
          <p className='mb-4 text-sm font-semibold uppercase tracking-widest text-red-500'>Welcome to PokéDex</p>

          <h1 className='max-w-xl text-5xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-6xl'>
            Your Ultimate <span className='text-red-500'>Pokédex</span>
          </h1>

          <p className='mt-6 max-w-lg text-lg leading-8 text-gray-500'>Explore Pokémon, discover their stats, types, and abilities. Start your journey and discover them all.</p>

          <Link to='#explore' className='mt-8 inline-flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-red-600'>
            Explore Pokémon
            <span>→</span>
          </Link>
        </div>

        {/* Hero Pokemon */}
        <div className='flex justify-center'>
          <div className='relative flex h-80 w-80 items-center justify-center rounded-full bg-red-100 md:h-96 md:w-96'>
            <div className='absolute h-64 w-64 rounded-full bg-red-200' />

            <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png' alt='Pikachu' className='relative z-10 w-64 drop-shadow-2xl transition duration-300 hover:scale-105 md:w-72' />
          </div>
        </div>
      </section>

      {/* Featured */}
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
    </div>
  );
}
