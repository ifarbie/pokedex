import type { Pokemon, PokemonType } from '~/types/Pokemon';
import PokemonTypeBadge from './PokemonTypeBadge';

type PokemonOverviewProps = {
  pokemon: Pokemon;
};

const PokemonOverview = ({ pokemon }: PokemonOverviewProps) => {
  return (
    <>
      <nav className='flex gap-6 border-b border-gray-200 mb-6'>
        <div className='border-b-2 border-red-500 px-1 py-4 text-sm font-semibold text-red-500'>Overview</div>
      </nav>

      <div className='grid gap-6 md:grid-cols-2'>
        {/* Pokemon Image */}
        <div className='flex min-h-105 items-center justify-center rounded-3xl bg-red-100'>
          <img src={pokemon.image} alt={pokemon.name} className='w-72 drop-shadow-2xl transition duration-300 hover:scale-105' />
        </div>

        {/* Pokemon Information */}
        <div className='rounded-3xl border border-gray-200 bg-white p-8'>
          <h2 className='text-xl font-bold text-gray-900'>Overview</h2>

          {/* Type */}
          <div className='mt-6'>
            <p className='mb-2 text-sm text-gray-400'>Type</p>

            <div className='flex gap-2'>
              {pokemon?.types?.map((type: PokemonType) => (
                <PokemonTypeBadge key={type} type={type} />
              ))}
            </div>
          </div>

          {/* Height & Weight */}
          <div className='mt-8 grid grid-cols-2 gap-4'>
            <div className='rounded-2xl bg-gray-50 p-4'>
              <p className='text-sm text-gray-400'>Height</p>

              <p className='mt-1 text-lg font-semibold text-gray-900'>{pokemon.height}</p>
            </div>

            <div className='rounded-2xl bg-gray-50 p-4'>
              <p className='text-sm text-gray-400'>Weight</p>

              <p className='mt-1 text-lg font-semibold text-gray-900'>{pokemon.weight}</p>
            </div>
          </div>

          {/* Abilities */}
          <div className='mt-8'>
            <p className='mb-3 text-sm text-gray-400'>Abilities</p>

            <div className='flex flex-wrap gap-2'>
              {pokemon?.abilities?.map((ability: string) => (
                <span key={ability} className='rounded-lg bg-gray-100 px-3 py-2 text-sm capitalize text-gray-700'>
                  {ability.replace('-', ' ')}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonOverview;
